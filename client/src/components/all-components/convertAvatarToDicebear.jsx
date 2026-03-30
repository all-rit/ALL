/* eslint-disable react/prop-types */

import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import PropTypes from 'prop-types';

/**
 * Convert old Avataaars attributes to DiceBears avataaars options format
 * and generate SVG data URL
 */
export const convertAvatarToDicebear = (avatarAttributes) => {
  // Map old avataaars attribute names to dicebear option names
  const dicebearOptions = {
    topType: avatarAttributes.topType,
    accessoriesType: avatarAttributes.accessoriesType,
    hairColor: avatarAttributes.hairColor,
    facialHairType: avatarAttributes.facialHairType,
    clotheType: avatarAttributes.clotheType,
    clotheColor: avatarAttributes.clotheColor,
    eyeType: avatarAttributes.eyeType,
    eyebrowType: avatarAttributes.eyebrowType,
    mouthType: avatarAttributes.mouthType,
    skinColor: avatarAttributes.skinColor,
  };

  // Create avatar with dicebear
  const avatar = createAvatar(avataaars, {
    seed: `${Object.values(dicebearOptions).join("-")}`,
    ...dicebearOptions,
  });

  // Return as data URL
  return avatar.toDataUrl();
};

convertAvatarToDicebear.PropTypes = {
  avatarAttributes: PropTypes.object,
  className: PropTypes.string,
  alt: PropTypes.string
}

/**
 * Generate a DiceBears avatar SVG component
 */
export const DicebearAvatar = ({
  avatarAttributes,
  className,
  alt,
  ...props
}) => {
  const dataUrl = convertAvatarToDicebear(avatarAttributes);

  return (
    <img
      src={dataUrl}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

DicebearAvatar.PropTypes = {
  avatarAttributes: PropTypes.object,
  className: PropTypes.string,
  alt: PropTypes.string
}