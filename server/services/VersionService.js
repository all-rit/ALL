const { type } = require("../version.js");
const { simpleGit } = require("simple-git");

const OWNER = "all-rit";
const REPO = "ALL";

const TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags`;
const REQUEST_PARAMS = {
  owner: OWNER,
  repo: REPO,
  per_page: 100,
  headers: {
    "X-GitHub-Api-Version": "2026-03-10",
  },
};

// Offical family of Github-maintained client librariers used to
// interact with the GithHub API
// octokit is ESM-only, so it has to be loaded with a dynamic import()
// rather than require() from this CommonJS module.
let octokit;
async function getOctokit() {
  if (!octokit) {
    const { Octokit } = await import("octokit");
    octokit = new Octokit();
  }
  return octokit;
}

/**
 * Method that checks type and then returns
 * the proper version/branch-hash
 * @returns either version number for staging/production or
 * branch-hash on local
 */
//TODO: Change this to store version in memory instead of live fetching during every reload/refresh
//TODO: Restore to original getAllVersions/getVersion pair since root cause was NOT race condition
async function getVersion() {
  // determine version
  // based on type, call and return corresponding version.
  let res;

  if (type === "prod") {
    res = await getProdVersion();
  } else if (type === "staging") {
    res = await getStagingVersion();
  } else {
    res = await getLocalBranch();
  }

  return res;
}

/* function for pulling latest non-beta tag */
async function getProdVersion() {
  /* checks every tag in a page of 100
    if the first page doesn't contain a tag without BETA
    go to the next page.
  */
  const octokit = await getOctokit();
  return await octokit.paginate(
    "GET " + TAG_URL,
    REQUEST_PARAMS,
    (response, done) => {
      const tagName = response.data
        .map((tag) => tag.name)
        .find((tagName) => !tagName.includes("BETA"));
      if (tagName) {
        done();
        return {
          local: false,
          version: tagName,
        };
      }
    },
  );
}

/* function for pulling latest beta tag */
async function getStagingVersion() {
  /* checks every tag in a page of 100
    if the first page doesn't contain a tag with BETA
    go to the next page.
  */
  const octokit = await getOctokit();
  return await octokit.paginate(
    "GET " + TAG_URL,
    REQUEST_PARAMS,
    (response, done) => {
      const tagName = response.data
        .map((tag) => tag.name)
        .find((tagName) => tagName.includes("BETA"));
      if (tagName) {
        done();
        return {
          local: false,
          version: tagName,
        };
      }
    },
  );
}

/* function for pulling latest local branch */
async function getLocalBranch() {
  /* Spawns child process to run "git rev-parse --short HEAD"  */
  const hash = await simpleGit().revparse(["--short", "HEAD"]);
  /* Spawns child process to run "git branch --show-current" then returns the branch name from the summary */
  const branch = await simpleGit()
    .branch(["--show-current"])
    .then((summary) => {
      return summary.all[0];
    });
  return { local: true, version: { branch: branch, hash: hash } };
}

module.exports = {
  getVersion,
};
