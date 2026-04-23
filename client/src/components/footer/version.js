import { useEffect, useState } from "react";
import versionService from "src/services/VersionService";

const Version = () => {
  let [version, setVersion] = useState(null);
  let [hash, setHash] = useState(null);
  let [local, setLocal] = useState(null);

  useEffect(() => {
    async function getVersion() {
      return await versionService.getVersion();
    }
    getVersion().then((response) => {
      setLocal(response.local);
      if (response.local) {
        console.log(response.version);
        setVersion(response.version.version);
        setHash(response.version.hash);
      } else {
        setVersion(response.version);
      }
    });
  }, []);
  return (
    <div>
      {local ? (
        <>
          Branch: {version}, Commit: {hash}
        </>
      ) : (
        <>Version: {version}</>
      )}
    </div>
  );
};
export default Version;
