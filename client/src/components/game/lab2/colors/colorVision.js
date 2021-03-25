import hexToRgba from 'hex-to-rgba';

//Check to ensure values are not outside of RGB standards
const adjustment = (value) => {
  if (value < 0) {
    return 0;
  } else if(value > 255) {
    return 255;
  } else {
    return value;
  }
}

//Controller for switching a color given a specified matrix
const switchColors = (colors, matrix) => {
  var red =((colors.R*matrix[0])+(colors.G*matrix[1])+(colors.B*matrix[2])+(colors.A*matrix[3])+matrix[4]);
  var green = ((colors.R*matrix[5])+(colors.G*matrix[6])+(colors.B*matrix[7])+(colors.A*matrix[8])+matrix[9]);
  var blue = ((colors.R*matrix[10])+(colors.G*matrix[11])+(colors.B*matrix[12])+(colors.A*matrix[13])+matrix[14]);
  var alpha = ((colors.R*matrix[15])+(colors.G*matrix[16])+(colors.B*matrix[17])+(colors.A*matrix[18])+matrix[19]);

  return({'red':adjustment(red), 'green':adjustment(green), 'blue':adjustment(blue), 'alpha':adjustment(alpha)});
}

//Matrix information for switching colors
const matrix = {
  'Protanopia':[0.567,0.433,0,0,0, 0.558,0.442,0,0,0, 0,0.242,0.758,0,0, 0,0,0,1,0],
  'Deuteranopia':[0.625,0.375,0,0,0, 0.7,0.3,0,0,0, 0,0.3,0.7,0,0, 0,0,0,1,0],
  'Tritanomaly':[0.95,0.05,0,0,0, 0,0.433,0.567,0,0, 0,0.475,0.525,0,0, 0,0,0,1,0]
}

/*
Function for simulating color vision deficiencies
*/
const ColorVision = (changeColors, gameOption, colors) => {

  //RGBA results from simulation
  const rgbaColors = {
    'R': 0,
    'G': 0,
    'B': 0,
    'A': 0
  }

  var updatedColors = [];
  var position = 0;

  /*
  For each color passed to the calculator, the system will calculate its
  simulated value and display it to the user for the game
  */
  colors.forEach((color) => {
    var tempColor = hexToRgba(color);
    tempColor = tempColor.split('rgba');
    tempColor = tempColor[1];
    tempColor = tempColor.split('(');
    tempColor = tempColor[1].split(')');
    tempColor = tempColor[0].split(',');
    rgbaColors.R = parseInt(tempColor[0]);
    rgbaColors.G = parseInt(tempColor[1].slice(1));
    rgbaColors.B = parseInt(tempColor[2].slice(1));
    rgbaColors.A = parseInt(tempColor[3].slice(1));
    var result;
    if (gameOption === 'Protanopia') {
      result = switchColors(rgbaColors, matrix.Protanopia);
    } else if (gameOption === 'Deuteranopia') {
      result = switchColors(rgbaColors, matrix.Deuteranopia);
    } else {
      result = switchColors(rgbaColors, matrix.Tritanomaly);
    }
    updatedColors[position] = `rgba(${result.red}, ${result.green}, ${result.blue}, ${result.alpha})`;
    position++;
  })
  changeColors(updatedColors);
}

export default ColorVision;
