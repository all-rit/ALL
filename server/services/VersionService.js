const { type } = require("../version");
const { simpleGit } = require("simple-git");

const OWNER = "all-rit";
const REPO = "ALL";
const VERSIONS = {};

const TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags`;
const REQUEST_PARAMS = {
      owner: OWNER,
      repo: REPO,
      per_page: 100,
      headers: {
        'X-GitHub-Api-Version': '2026-03-10',
      }
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
async function getVersion() {
  if (Object.keys(VERSIONS).includes(type)){
    return VERSIONS[type];
  }
  return {}
}

/**
 * Method called in app.js that loads all tags.
 * Each lookup is independent (network calls to GitHub, a local git spawn
 * that isn't available in every environment) so a failure in one must not
 * stop the others from populating, or crash the server that called this.
 */
async function getAllVersions(){
  await Promise.allSettled([
    getProdVersion()
      .then((response) => { VERSIONS.prod = response[0]; })
      .catch((err) => console.error('Unable to fetch prod version:', err)),
    getStagingVersion()
      .then((response) => { VERSIONS.staging = response[0]; })
      .catch((err) => console.error('Unable to fetch staging version:', err)),
    getLocalBranch()
      .then((response) => { VERSIONS.branch = response; })
      .catch((err) => console.error('Unable to determine local branch:', err)),
  ]);
}

/* function for pulling latest non-beta tag */
async function getProdVersion() {
  /* checks every tag in a page of 100
    if the first page doesn't contain a tag without BETA
    go to the next page.
  */
  const octokit = await getOctokit();
  return await octokit.paginate(
    'GET ' + TAG_URL, 
    REQUEST_PARAMS, 
    (response, done) => {
      const tagName = response.data.map((tag) => tag.name).find((tagName) => !tagName.includes("BETA"));
      if(tagName) {
        done();
        return {
          "local": false,
          "version": tagName
        }
      }
    });
  }


/* function for pulling latest beta tag */
async function getStagingVersion() {
  /* checks every tag in a page of 100
    if the first page doesn't contain a tag with BETA
    go to the next page.
  */
  const octokit = await getOctokit();
  return await octokit.paginate(
    'GET ' + TAG_URL, 
    REQUEST_PARAMS, 
    (response, done) => {
      const tagName = response.data.map((tag) => tag.name).find((tagName) => tagName.includes("BETA"));
      if(tagName) {
        done();
        return {
          "local": false,
          "version": tagName
        }
      }
    });
}

/* function for pulling latest local branch */
async function getLocalBranch() {
  /* Spawns child process to run "git rev-parse --short HEAD"  */
  const hash = await simpleGit().revparse(["--short", "HEAD"])
  /* Spawns child process to run "git branch --show-current" then returns the branch name from the summary */
  const branch = await simpleGit().branch((["--show-current"]))
    .then((summary) => {
      return summary.all[0]
    })
  return {"local": true, "version": {"version": branch, "hash": hash}};
}

module.exports = { 
  getVersion,
  getAllVersions,
};