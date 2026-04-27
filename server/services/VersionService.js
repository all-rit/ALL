const { Octokit } = require("octokit");
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
        Authorization: `Bearer ${process.env.TEMP_TOKEN}`
      }
    };

// Offical family of Github-maintained client librariers used to 
// interact with the GithHub API
const octokit = new Octokit();

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
 * Method called in app.js that loads all tags
 */
async function getAllVersions(){
  VERSIONS.prod = await getProdVersion().then((response) => response[0]);
  VERSIONS.staging = await getStagingVersion().then((response) => response[0]);
  VERSIONS.branch = await getLocalBranch()
}

/* function for pulling latest non-beta tag */
async function getProdVersion() {
  /* checks every tag in a page of 100
    if the first page doesn't contain a tag without BETA
    go to the next page.
  */
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