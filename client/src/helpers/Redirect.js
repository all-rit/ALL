import { Sections } from '../constants/index';
import { navigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const handleRedirect = (actions = {}, lab, body = 0) => {
  if (!(lab in Sections)) {
    // check if lab exists
    alert('Page does not exist');
    lab = 99;
  }
  const labname = Sections[lab].name;
  const bodyname = Sections[lab][body].name;
  navigate(
    process.env.PUBLIC_URL + '/' + (lab !== 99 ? labname + '/' : '') + bodyname,
  );
};

export const stateChange = (actions, pathname) => {
  let parsed = pathname.split('/');
  parsed = parsed.filter((x) => x !== '');
  let redirectLab = null;
  let redirectBody = null;
  let noMatch = false;
  if (parsed.length === 0) {
    // if url is all.rit.edu
    actions.setLab(99);
    actions.setBody(0);
    return;
  }
  const [labs, bodies] = getLabsBodies();
  if (parsed.length === 1) {
    // if url is all.rit.edu/{Lab} or all.rit.edu/{homebody}
    const bodies = getLabsBodies(true);
    // check for home body like sitemap first
    redirectBody = bodies.includes(parsed[0]) ? parsed[0] : null;
    redirectLab = '';
    if (!redirectBody) {
      // means it wasn't a valid home page body, so check lab
      redirectLab = labs.includes(parsed[0]) ? parsed[0] : null;
      redirectBody = '';
    }
  } else {
    parsed.filter((string) => {
      // checks for all.rit.edu/{Lab}/{Something}
      bodies.forEach((word) => {
        if (string === word && !redirectBody) {
          redirectBody = word;
        }
      });
      labs.forEach((word) => {
        if (string === word && !redirectLab) {
          redirectLab = word;
        }
      });
      return '';
    });
  }
  switch (redirectLab) {
    case 'Lab0':
      actions.setLab(0);
      break;
    case 'Lab1':
      actions.setLab(1);
      break;
    case 'Lab2':
      actions.setLab(2);
      break;
    case 'Lab3':
      actions.setLab(3);
      break;
    case 'Lab4':
      actions.setLab(4);
      break;
    case 'Lab5':
      actions.setLab(5);
      break;
    case 'Lab6':
      actions.setLab(6);
      break;
    case 'Lab7':
      actions.setLab(7);
      break;
    case 'Lab8':
      actions.setLab(8);
      break;
    case 'Lab9':
      actions.setLab(9);
      break;
    case 'Lab10':
      actions.setLab(10);
      break;
    case 'Lab11':
      actions.setLab(11);
      break;
    case 'Lab12':
      actions.setLab(12);
      break;
    case 'Lab13':
      actions.setLab(13);
      break;
    case 'Lab14':
      actions.setLab(14);
      break;
    case '':
      actions.setLab(99);
      break;
    default:
      if (redirectBody !== 'Imagine') {
        noMatch = true;
      }
      actions.setLab(99);
      break;
  }
  switch (redirectBody) {
    case 'About':
      actions.setBody(0);
      break;
    case 'Reading':
      actions.setBody(1);
      break;
    case 'Exercise':
      actions.setBody(2);
      break;
    case 'Reinforcement':
      actions.setBody(3);
      break;
    case 'Quiz':
      actions.setBody(4);
      break;
    case 'SiteMap':
      actions.setBody(1);
      break;
    case 'Profile':
      actions.setBody(2);
      break;
    case 'Imagine':
      actions.setBody(3);
      break;
    default:
      actions.setBody(0);
      if (redirectBody !== '') {
        noMatch = true;
      }
      break;
  }
  if (noMatch) {
    actions.setBody(0);
    actions.setLab(99);
  }
};
const getLabsBodies = (home = false) => {
  const labs = [];
  const bodies = [];
  for (let lab in Sections) {
    if (home) {
      lab = 99;
    }
    labs.push(Sections[lab].name);
    for (const body in Sections[lab]) {
      if (bodies.indexOf(Sections[lab][body].name) === -1) {
        bodies.push(Sections[lab][body].name);
      }
    }
  }
  if (home) {
    return bodies;
  }
  return [labs, bodies];
};

export default handleRedirect;
