import { FILE_COUNT } from "../../../../../constants/lab7";
import _ from "lodash";

/**
 * Array of files with their respective properties.
 *
 * @typedef {Object} File
 * @property {string} fileName - The name of the file.
 * @property {string} content - The content of the file.
 * @property {number} sensitivityLevel - The sensitivity level of the file.
 * @property {string} accessStatus - The access status of the file.
 */

/**
 * Array of files.
 *
 * @type {File[]}
 */
export const FILES = [
  {
    fileName: "PortaVolutpat.tiff",
    content: "Parent's Last Name",
    sensitivityLevel: 3,
    accessStatus: "OPEN",
  },
  {
    fileName: "Massa.jpeg",
    content: "Email Address",
    sensitivityLevel: 1,
    accessStatus: "OPEN",
  },
  {
    fileName: "Pellentesque.tiff",
    content: "Email Address",
    sensitivityLevel: 1,
    accessStatus: "OPEN",
  },
  {
    fileName: "AugueAliquam.xls",
    content: "Home Address",
    sensitivityLevel: 4,
    accessStatus: "OPEN",
  },
  {
    fileName: "Dolor.avi",
    content: "SSN",
    sensitivityLevel: 5,
    accessStatus: "OPEN",
  },
  {
    fileName: "MetusSapien.avi",
    content: "SSN",
    sensitivityLevel: 5,
    accessStatus: "OPEN",
  },
  {
    fileName: "DuisFaucibus.mpeg",
    content: "Full Name",
    sensitivityLevel: 2,
    accessStatus: "OPEN",
  },
  {
    fileName: "CuraeDonec.avi",
    content: "Parent's Last Name",
    sensitivityLevel: 3,
    accessStatus: "OPEN",
  },
  {
    fileName: "SodalesTincidunt.tiff",
    content: "Parent's Last Name",
    sensitivityLevel: 3,
    accessStatus: "OPEN",
  },
  {
    fileName: "TurpisEgetElit.png",
    content: "Full Name",
    sensitivityLevel: 2,
    accessStatus: "LOCKED",
  },
  {
    fileName: "NullaTellusIn.xls",
    content: "Home Address",
    sensitivityLevel: 4,
    accessStatus: "OPEN",
  },
  {
    fileName: "InterdumIn.gif",
    content: "Home Address",
    sensitivityLevel: 4,
    accessStatus: "OPEN",
  },
  {
    fileName: "OdioPorttitorId.ppt",
    content: "SSN",
    sensitivityLevel: 5,
    accessStatus: "LOCKED",
  },
  {
    fileName: "MolestieHend.mpeg",
    content: "Home Address",
    sensitivityLevel: 4,
    accessStatus: "OPEN",
  },
  {
    fileName: "PrimisInFaucibus.xls",
    content: "Parent's Last Name",
    sensitivityLevel: 3,
    accessStatus: "OPEN",
  },
  {
    fileName: "FeugiatNon.avi",
    content: "Home Address",
    sensitivityLevel: 4,
    accessStatus: "OPEN",
  },
  {
    fileName: "VulputateLuctus.gif",
    content: "Email Address",
    sensitivityLevel: 1,
    accessStatus: "OPEN",
  },
  {
    fileName: "TurpisEget.mp3",
    content: "Parent's Last Name",
    sensitivityLevel: 3,
    accessStatus: "OPEN",
  },
  {
    fileName: "Bibendum.mp3",
    content: "Email Address",
    sensitivityLevel: 1,
    accessStatus: "OPEN",
  },
  {
    fileName: "LeoOdio.avi",
    content: "Full Name",
    sensitivityLevel: 2,
    accessStatus: "OPEN",
  },
];

export const generateList = () => _.sampleSize(FILES, FILE_COUNT);
