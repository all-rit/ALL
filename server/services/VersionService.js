const { Octokit } = require("@octokit/core");
const { type } = require("../version");
const { simpleGit, CleanOptions } = require("simple-git");

simpleGit().clean(CleanOptions.FORCE)

const OWNER = "all-rit";
const REPO = "ALL";

const TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=100`;

const octokit = new Octokit();

async function getVersion() {
  if (type == "prod"){
    return getProdVersion();
  }
  else if (type == "staging"){
    return getStagingVersion();
  }
  else if (type == "branch"){
    return getLocalBranch();
  }
  return "service fail"
}

/* function for pulling latest non-beta tag */
async function getProdVersion() {
  return await octokit.request('Get ' + TAG_URL, 
    {
      owner: OWNER,
      repo: REPO,
      headers: {
        'X-GitHub-Api-Version': '2026-03-10'
      }
    }).then(
      (res) => {
      if (res.status == 200){
        for (const tag of res.data){
          if (tag.name.at(-1) != "A"){
            return {
              "local": false,
              "version": tag.name
            }
          }
        }
      }
    })
}

/* function for pulling latest beta tag */
async function getStagingVersion() {
  return await octokit.request('Get ' + TAG_URL, 
    {
      owner: OWNER,
      repo: REPO,
      headers: {
        'X-GitHub-Api-Version': '2026-03-10'
      }
    }).then(
      (res) => {
      if (res.status == 200){
        for (const tag of res.data){
          if (tag.name.at(-1) == "A"){
            return {
              "local": false,
              "version": tag.name
            }
          }
        }
      }
    })
}

/* function for pulling latest local branch */
async function getLocalBranch() {
  const hash = await simpleGit().revparse(["--short", "HEAD"])
  const branch = await simpleGit().branch((["--show-current"]))
    .then((summary) => {
      return summary.all[0]
    })
  return {"local": true, "version": `${branch}: ${hash}`};
}

module.exports = { 
  getVersion,
};