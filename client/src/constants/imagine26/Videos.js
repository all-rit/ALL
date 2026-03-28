//these are the videos played during the game (we need to add videos for 0,2,3)
//note: the playingGame aded to the google drive was too large (100mb+) and github wouldn't let me push. i switched to
//use the imagin25 video instead

const videoPaths = {
  0: "/videos/imagine26/video0.mp4",
  1: "../videos/imagine26/1playingGalaga.mp4",
  2: "../videos/imagine26/video2.mp4",
  3: "../videos/imagine26/video3.mp4",
};

//these are the videos shown when the user sees their score ( we need to add the videos for temmate 0,2,3)
const scorePagePaths = {
  0: "/videos/imagine26/video0.mp4",
  1: "../videos/imagine26/1control.mp4",
  2: "../videos/imagine26/video2.mp4",
  3: "../videos/imagine26/video3.mp4",
};

//these are the videos shown to the user during the exercise portion dependin on their group (we need to add the vidoes for 0,2,3)
const groupVideoPaths = {
  0: {
    experiential: "../videos/imagine26/0experiential.mp4",
    expression: "../videos/imagine26/0expression.mp4",
    control: "../videos/imagine26/0control.mp4",
  },
  1: {
    experiential: "../videos/imagine26/1experiential.mp4",
    expression: "../videos/imagine26/1expression.mp4",
    control: "../videos/imagine26/1control.mp4",
  },
  2: {
    experiential: "../videos/imagine26/2experiential.mp4",
    expression: "../videos/imagine26/2expression.mp4",
    control: "../videos/imagine26/2control.mp4",
  },
  3: {
    experiential: "../videos/imagine26/3experiential.mp4",
    expression: "../videos/imagine26/3expression.mp4",
    control: "../videos/imagine26/3control.mp4",
  },
};

export { videoPaths, groupVideoPaths, scorePagePaths };
