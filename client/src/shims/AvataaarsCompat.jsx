import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { createAvatar } from "@dicebear/core";
import * as avataaars from "@dicebear/avataaars";

/**
 * Fallbacks when props are missing, empty, or the legacy sentinel `"Default"`.
 * Uses react-avataaars-style names where applicable; the shim maps them for Dicebear.
 * `@dicebear/avataaars` exposes only one nose variant (`default`).
 */
export const AVATAAARS_COMPAT_DEFAULTS = {
  topType: "Bald",
  hairColor: "Brown",
  clotheColor: "Gray02",
  skinColor: "Pale",
  clotheType: "ShirtCrewNeck",
  eyeType: "Happy",
  mouthType: "Twinkle",
  noseType: "Default",
};

const DICEBEARNOSE = ["default"];

const isUnsetLegacy = (value) =>
  value == null || value === "" || value === "Default";

const effectiveTopType = (topType) =>
  isUnsetLegacy(topType) ? AVATAAARS_COMPAT_DEFAULTS.topType : topType;

const HAIR_TYPE_MAP = {
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

const CLOTHES_COLOR_MAP = {
  Black: "262E33",
  Blue01: "65C9FF",
  Blue02: "5199E4",
  Blue03: "25557C",
  Gray01: "E6E6E6",
  Gray02: "929598",
  Heather: "3C4F5C",
  PastelBlue: "B1E2FF",
  PastelGreen: "A7FFC4",
  PastelOrange: "FFDEB5",
  PastelRed: "FFAFB9",
  PastelYellow: "FFFFB1",
  Pink: "FF488E",
  Red: "FF5C5C",
  White: "FFFFFF",
};

const HAIR_COLOR_MAP = {
  Auburn: "A55728",
  Black: "2C1B18",
  Blonde: "B58143",
  BlondeGolden: "D6B370",
  Brown: "724133",
  BrownDark: "4A312C",
  PastelPink: "F59797",
  Blue: "000FDB",
  Platinum: "ECDCBF",
  Red: "C93305",
  SilverGray: "E8E1E1",
};

const SKIN_COLOR_MAP = {
  Tanned: "FD9841",
  Yellow: "dcca87",
  Pale: "FFDBB4",
  Light: "EDB98A",
  Brown: "D08B5B",
  DarkBrown: "AE5D29",
  Black: "614335",
};

const toLowerCamel = (value) => {
  if (!value) return undefined;
  return value.charAt(0).toLowerCase() + value.slice(1);
};

const normalizeTop = (value) => {
  if (!value || value === "Default") return null;
  return HAIR_TYPE_MAP[value] ?? toLowerCamel(value);
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

const HEX_COLOR_REGEX = /^#?[a-fA-F0-9]{6}$/;

const normalizeColor = (value, palette) => {
  if (!value || value === "Default" || value === "Blank") return undefined;
  if (HEX_COLOR_REGEX.test(value)) {
    return value.replace("#", "").toLowerCase();
  }
  return palette[value];
};

const CompatAvatar = ({ className, alt, avatarStyle, ...props }) => {
  const svg = useMemo(() => {
    const top = normalizeTop(effectiveTopType(props.topType));
    const accessories = normalizeOption(props.accessoriesType);
    const facialHair = normalizeOption(props.facialHairType);
    const clothing = normalizeOption(
      isUnsetLegacy(props.clotheType)
        ? AVATAAARS_COMPAT_DEFAULTS.clotheType
        : props.clotheType,
    );
    const eyes =
      normalizeEye(props.eyeType) ??
      normalizeEye(AVATAAARS_COMPAT_DEFAULTS.eyeType);
    const eyebrows = normalizeOption(props.eyebrowType);
    const mouth =
      normalizeOption(props.mouthType) ??
      normalizeOption(AVATAAARS_COMPAT_DEFAULTS.mouthType);
    const hairColor = normalizeColor(
      isUnsetLegacy(props.hairColor)
        ? AVATAAARS_COMPAT_DEFAULTS.hairColor
        : props.hairColor,
      HAIR_COLOR_MAP,
    );
    const clothesColor = normalizeColor(
      isUnsetLegacy(props.clotheColor)
        ? AVATAAARS_COMPAT_DEFAULTS.clotheColor
        : props.clotheColor,
      CLOTHES_COLOR_MAP,
    );
    const skinColor = normalizeColor(
      isUnsetLegacy(props.skinColor)
        ? AVATAAARS_COMPAT_DEFAULTS.skinColor
        : props.skinColor,
      SKIN_COLOR_MAP,
    );
    const hatColor = normalizeColor(props.hatColor, CLOTHES_COLOR_MAP);
    const facialHairColor = normalizeColor(
      props.facialHairColor,
      HAIR_COLOR_MAP,
    );

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
      nose: DICEBEARNOSE,
      hairColor: hairColor ? [hairColor] : undefined,
      clothesColor: clothesColor ? [clothesColor] : undefined,
      skinColor: skinColor ? [skinColor] : undefined,
      hatColor: hatColor ? [hatColor] : undefined,
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
  hatColor: PropTypes.string,
  eyeType: PropTypes.string,
  eyebrowType: PropTypes.string,
  mouthType: PropTypes.string,
  noseType: PropTypes.string,
  skinColor: PropTypes.string,
};

export default CompatAvatar;
export { CompatAvatar as Avatar };
