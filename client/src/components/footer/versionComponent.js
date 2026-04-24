import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import versionService from "src/services/VersionService";

const Version = (props) => {
  const [version, setVersion] = useState(null);
  const [hash, setHash] = useState(null);
  const [local, setLocal] = useState(null);
  const [className, setClassName] = useState();

  useEffect(() => {
    async function getVersion() {
      return await versionService.getVersion();
    }
    getVersion().then((response) => {
      console.log(response);
      setLocal(response.local);
      if (response.local) {
        console.log(response.version);
        setVersion(response.version.version);
        setHash(response.version.hash);
      } else {
        setVersion(response.version);
      }
    });
    setClassName(props.classname);
  }, []);
  return (
    <div className={className}>
      {local ? (
        <p>
          Branch: {version} <br /> Commit: {hash}
        </p>
      ) : (
        <p>Version: {version}</p>
      )}
    </div>
  );
};

Version.propTypes = {
  classname: PropTypes.String,
};

export default Version;
