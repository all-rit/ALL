const VersionService = require("../services/VersionService")

async function getVersion(req, res) {
  const version = await VersionService.getVersion();
  if (version != null){
    res.status(200)
    return await res.json(version);
  }
  res.status(404);
  return res.json({"local": false, "version": "no_version_found"})
}

module.exports = {
  getVersion,
};