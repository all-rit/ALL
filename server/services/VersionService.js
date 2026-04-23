const { Octokit } = require("@octokit/core");
const { type } = require("../version");
// const { git, CleanOptions } = require("simple-git");

const OWNER = "all-rit";
const REPO = "ALL";

const TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=100`;

const octokit = new Octokit();

// git.clean(CleanOptions.FORCE);

// console.log(await git.revparse(["--short", "HEAD"]))

// let test = git.revparse(["--short", "HEAD"])
// console.log(test);

async function getVersion() {
  if (type == "prod"){
    return getProdVersion();
  }
  else if (type == "staging"){
    return getStagingVersion();
  }
  else if (type == "branch"){
    getLocalBranch();
    return "sum"
    // return getLocalBranch();
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
            return tag.name
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
            return tag.name
          }
        }
      }
    })
}

/* function for pulling latest local branch */
async function getLocalBranch() {
  // console.log(git.revparse("--short HEAD"));
}

module.exports = { 
  getVersion,
};