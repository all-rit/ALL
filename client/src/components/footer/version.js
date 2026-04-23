import { useEffect, useState } from "react";
import versionService from "src/services/VersionService";

const Version = () => {
  let [version, setVersion] = useState(null);
  let [local, setLocal] = useState(null);

  useEffect(() => {
    async function getVersion() {
      return await versionService.getVersion();
    }
    getVersion().then((response) => {
      setLocal(response.local);
      setVersion(response.version);
    });
  }, []);
  return <div>{local ? <>Branch: {version}</> : <>Version: {version}</>}</div>;
};
export default Version;
