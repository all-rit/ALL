const VersionService = require("../services/VersionService")

async function getVersion(req, res) {
  const version = await VersionService.getVersion();
  if (version != null){
    return await res.send(version);
  }
  return res.json("fail")
}

module.exports = {
  getVersion,
};