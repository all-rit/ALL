import React, { useEffect, useState } from "react";
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
      setLocal(response.local);
      if (response.local) {
        setVersion(response.version.version);
        setHash(response.version.hash);
      } else {
        setVersion(response.version);
      }
    });
    setClassName(props.className);
  }, []);
  return (
    <div className={className}>
      {local ? (
        <p className="tw-text-white">
          Branch: {version} <br /> Commit: {hash}
        </p>
      ) : (
        <p className="tw-text-white">Version: {version}</p>
      )}
    </div>
  );
};

Version.propTypes = {
  className: PropTypes.string,
};

export default Version;
