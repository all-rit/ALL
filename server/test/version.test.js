const assert = require("node:assert/strict");
const { test } = require("node:test");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const { runInNewContext } = require("node:vm");

const source = readFileSync(path.join(__dirname, "../version.js"), "utf8");

function versionType(env) {
  const context = { process: { env }, module: { exports: {} } };
  runInNewContext(source, context);
  return context.module.exports.type;
}

test("staging selects the staging version without requiring HOST", () => {
  assert.equal(versionType({ ENVIRONMENT: "staging" }), "staging");
});

test("production selects prod independently of HOST", () => {
  for (const HOST of [undefined, "all.rit.edu", "ball.gccis.rit.edu", "localhost"]) {
    const env = { ENVIRONMENT: "production" };
    if (HOST !== undefined) env.HOST = HOST;
    assert.equal(versionType(env), "prod");
  }
});

test("staging is independent of HOST", () => {
  for (const HOST of ["all.rit.edu", "ball.gccis.rit.edu", "localhost"]) {
    assert.equal(versionType({ ENVIRONMENT: "staging", HOST }), "staging");
  }
});

test("local, unknown and unset environments keep the branch version", () => {
  for (const ENVIRONMENT of [undefined, "", "development", "local", "test", "unknown"]) {
    const env = { HOST: "all.rit.edu" };
    if (ENVIRONMENT !== undefined) env.ENVIRONMENT = ENVIRONMENT;
    assert.equal(versionType(env), "branch");
  }
});

