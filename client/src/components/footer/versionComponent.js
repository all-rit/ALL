import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import versionService from "src/services/VersionService";

const Version = (props) => {
  const [version, setVersion] = useState("");
  const [branch, setBranch] = useState("");
  const [success, setSuccess] = useState(false);
  const [hash, setHash] = useState("");
  const [local, setLocal] = useState(true);

  useEffect(() => {
    versionService.getVersion().then((response) => {
      if (!response || Object.keys(response).length === 0) {
        setSuccess(false);
        return;
      }
      setLocal(response.local);
      setSuccess(true);
      if (response.local) {
        setBranch(response.version.branch);
        setHash(response.version.hash);
      } else {
        setVersion(response.version);
      }
    });
  }, [success, local, branch, version, hash]);

  if (!success) {
    return <p className={props.className}> Version not found. </p>;
  }
  return (
    <div className={props.className}>
      {local ? (
        <p>
          Branch: {branch} <br /> Commit: {hash}
        </p>
      ) : (
        <p>Version: {version}</p>
      )}
    </div>
  );
};

Version.propTypes = {
  className: PropTypes.string,
};

export default Version;
