import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const Imagine26Context = createContext();

/**
 * Custom hook that provides access to the Imagine26ImageContext.
 * @returns {Object} The Imagine26ImageContext object.
 * @throws {Error} If used outside of Imagine26ImageContext.
 */
const useImagine26Context = () => {
  const context = useContext(Imagine26Context);

  if (context === undefined) {
    throw new Error(
      "useImagine26ImageContext must be used within Imagine26ImageContext",
    );
  }

  return context;
};

const Imagine26Provider = ({ children }) => {
  const [blob, setBlob] = useState(null);
  const [image, setImageUrl] = useState(null);

  const updatePhoto = (newBlob, newImage) => {
    if (newBlob) {
      setBlob(newBlob);
    }
    if (newImage) {
      setImageUrl(newImage);
    }
  };

  const clearPhoto = () => {
    setBlob(null);
    setImageUrl(null);
  };

  const contextValue = {
    blob,
    image,
    updatePhoto,
    clearPhoto,
  };

  return (
    <Imagine26Context.Provider value={contextValue}>
      {children}
    </Imagine26Context.Provider>
  );
};

export { Imagine26Provider, useImagine26Context };

Imagine26Provider.propTypes = {
  children: PropTypes.element,
};
