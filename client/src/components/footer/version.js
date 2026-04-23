import { useEffect, useState } from "react";
import versionService from "src/services/VersionService";

const Version = () => {
  let [version, setVersion] = useState(null);

  useEffect(() => {
    async function getVersion() {
      return await versionService.getVersion();
    }
    getVersion().then((version) => {
      setVersion(version);
    });
  }, []);
  return (
    <>
      <p>Version: {version}</p>
    </>
  );
};
export default Version;
