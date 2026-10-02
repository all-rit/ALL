import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import versionService from "src/services/VersionService";

const Version = (props) => {
  const [version, setVersion] = useState(null);
  const [branch, setBranch] = useState(null);
  const [success, setSuccess] = useState(null);
  const [hash, setHash] = useState(null);
  const [local, setLocal] = useState(null);
  const [className, setClassName] = useState();

  useEffect(() => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function getVersion() {
      const resp = await versionService.getVersion();
      if (typeof resp === "object" && Object.keys(resp).length === 0) {
        for (let i = 0; i < 2; i++) {
          await sleep(3000);
          return await getVersion();
        }
      }
      return resp;
    }

    getVersion().then((response) => {
      if (!response) {
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
    setClassName(props.className);
  }, []);

  if (!success) {
    return <p> Version not found. </p>;
  }
  return (
    <div className={className}>
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
