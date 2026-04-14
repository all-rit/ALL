import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { createAvatar } from "@dicebear/core";
import * as avataaars from "@dicebear/avataaars";

const TOP_TYPE_MAP = {
  NoHair: null,
  Bald: null,
  Eyepatch: "eyepatch",
  Hat: "hat",
  Hijab: "hijab",
  Turban: "turban",
  WinterHat1: "winterHat1",
  WinterHat2: "winterHat02",
  WinterHat3: "winterHat03",
  WinterHat4: "winterHat04",
  LongHairBigHair: "bigHair",
  LongHairBob: "bob",
  LongHairBun: "bun",
  LongHairCurly: "curly",
  LongHairCurvy: "curvy",
  LongHairDreads: "dreads",
  LongHairFrida: "frida",
  LongHairFro: "fro",
  LongHairFroBand: "froBand",
  LongHairNotTooLong: "longButNotTooLong",
  LongHairMiaWallace: "miaWallace",
  LongHairShavedSides: "shavedSides",
  LongHairStraight: "straight01",
  LongHairStraight2: "straight02",
  LongHairStraightStrand: "straightAndStrand",
  ShortHairDreads01: "dreads01",
  ShortHairDreads02: "dreads02",
  ShortHairFrizzle: "frizzle",
  ShortHairShaggyMullet: "shaggyMullet",
  ShortHairShortCurly: "shortCurly",
  ShortHairShortFlat: "shortFlat",
  ShortHairShortRound: "shortRound",
  ShortHairShortWaved: "shortWaved",
  ShortHairSides: "sides",
  ShortHairTheCaesar: "theCaesar",
  ShortHairTheCaesarSidePart: "theCaesarAndSidePart",
};

const toLowerCamel = (value) => {
  if (!value) return undefined;
  return value.charAt(0).toLowerCase() + value.slice(1);
};

const normalizeTop = (value) => {
  if (!value || value === "Default") return null;
  return TOP_TYPE_MAP[value] ?? toLowerCamel(value);
};

const normalizeOption = (value) => {
  if (!value || value === "Blank" || value === "Default") return undefined;
  return toLowerCamel(value);
};

const normalizeEye = (value) => {
  if (!value || value === "Blank" || value === "Default") return undefined;
  if (value === "Close") return "closed";
  if (value === "Dizzy") return "xDizzy";
  return toLowerCamel(value);
};

const normalizeColor = (value) => {
  if (!value || value === "Default" || value === "Blank") return undefined;
  return toLowerCamel(value);
};

const CompatAvatar = ({ className, alt, avatarStyle, ...props }) => {
  const svg = useMemo(() => {
    const top = normalizeTop(props.topType);
    const accessories = normalizeOption(props.accessoriesType);
    const facialHair = normalizeOption(props.facialHairType);
    const clothing = normalizeOption(props.clotheType);
    const eyes = normalizeEye(props.eyeType);
    const eyebrows = normalizeOption(props.eyebrowType);
    const mouth = normalizeOption(props.mouthType);
    const hairColor = normalizeColor(props.hairColor);
    const clothesColor = normalizeColor(props.clotheColor);
    const skinColor = normalizeColor(props.skinColor);
    const facialHairColor = normalizeColor(props.facialHairColor);

    const avatar = createAvatar(avataaars, {
      style: avatarStyle?.toLowerCase() === "circle" ? ["circle"] : ["default"],
      top: top ? [top] : undefined,
      topProbability: top ? 100 : 0,
      accessories: accessories ? [accessories] : undefined,
      accessoriesProbability: accessories ? 100 : 0,
      facialHair: facialHair ? [facialHair] : undefined,
      facialHairProbability: facialHair ? 100 : 0,
      clothing: clothing ? [clothing] : undefined,
      eyes: eyes ? [eyes] : undefined,
      eyebrows: eyebrows ? [eyebrows] : undefined,
      mouth: mouth ? [mouth] : undefined,
      hairColor: hairColor ? [hairColor] : undefined,
      clothesColor: clothesColor ? [clothesColor] : undefined,
      skinColor: skinColor ? [skinColor] : undefined,
      facialHairColor: facialHairColor ? [facialHairColor] : undefined,
    });

    return avatar.toString();
  }, [avatarStyle, props]);

  return (
    <div
      className={className}
      role="img"
      aria-label={alt || "avatar"}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

CompatAvatar.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  avatarStyle: PropTypes.string,
  topType: PropTypes.string,
  accessoriesType: PropTypes.string,
  hairColor: PropTypes.string,
  facialHairType: PropTypes.string,
  facialHairColor: PropTypes.string,
  clotheType: PropTypes.string,
  clotheColor: PropTypes.string,
  eyeType: PropTypes.string,
  eyebrowType: PropTypes.string,
  mouthType: PropTypes.string,
  skinColor: PropTypes.string,
};

export default CompatAvatar;
export { CompatAvatar as Avatar };
