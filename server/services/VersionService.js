const { Octokit } = require("@octokit/core");
const { type } = require("../version");

const OWNER = "all-rit";
const REPO = "ALL";

const url = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=10`;

const octokit = new Octokit();

async function getVersion() {
  if (type == "prod"){
    return getProdVersion();
  }
  return "service fail"
}

/* function for pulling latest non-beta tag */
async function getProdVersion() {
  return await octokit.request('Get ' + url, 
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
            console.log(tag.name)
            return tag.name
          }
        }
      }
    })
}

module.exports = { 
  getVersion,
};