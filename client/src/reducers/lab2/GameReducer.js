import{
  SELECT_OPTION,
  UPDATE_DEFAULT_COLORS,
  UPDATE_GAME_COLORS,
  RESET_COLORS,
  RESET_OPTION,
  ACTIVATE_POPUP,
  START_GAME,
  END_GAME,
  LOGIN,
  CHANGED_RESET,
  CLOSE_INFO_POPUP,
  ABOUT_STATE,
  END_ABOUT_STATE,
  STAT_STATE,
  END_STAT_STATE,
  FIRST_GAME,
  INFO_STATE,
  END_INFO_STATE,
  INFO_STATE_TWO,
  END_INFO_STATE_TWO,
  INFO_STATE_THREE,
  END_INFO_STATE_THREE,
  END_SYSTEM,
  BACKGROUND_TO_WHITE,
  BACKGROUND_TO_GREY,
  RESET_BACKGROUND,
  COLOR_CHANGE,
  END_COLOR_CHANGE,
  RESET,
  BACK_GAME
} from "../../constants/lab2/index"

//Declaing initial state for the colors in the system
const initialColors = {
  baseBackground: "#01581F",
  baseRightCircle: "#B44040",
  baseWrongCircleOne: "#948534",
  baseWrongCircleTwo: "#57CC14",
  gameBackground: '#01581F',
  gameRightCircle: '#B44040',
  gameWrongCircleOne: '#948534',
  gameWrongCircleTwo: '#57CC14',
  popup: false,
  changed: false
}

//Function for changing the colors for both the game and entire system
export const changeColors = (state = initialColors, action = {}) => {
  switch(action.type) {
    case UPDATE_DEFAULT_COLORS:
      return Object.assign({}, state, {baseBackground: action.payload[0],
        baseRightCircle: action.payload[1], baseWrongCircleOne: action.payload[2],
        baseWrongCircleTwo: action.payload[3], changed: true});
    case UPDATE_GAME_COLORS:
      return Object.assign({}, state, {gameBackground: action.payload[0],
        gameRightCircle: action.payload[1], gameWrongCircleOne: action.payload[2],
        gameWrongCircleTwo: action.payload[3]});
    case ACTIVATE_POPUP:
      return {...state, popup: action.payload};
    case RESET_COLORS:
      return Object.assign({}, state,
        {gameBackground: initialColors.baseBackground,
        gameRightCircle: initialColors.baseRightCircle,
        gameWrongCircleOne: initialColors.baseWrongCircleOne,
        gameWrongCircleTwo: initialColors.baseWrongCircleTwo});
    case BACKGROUND_TO_WHITE:
      return {...state, gameBackground: 'white'}
    case BACKGROUND_TO_GREY:
      return {...state, gameBackground: 'rgba(38,38,38,1)'}
    case RESET_BACKGROUND:
      return {...state, gameBackground: action.payload}
    case CHANGED_RESET:
      return Object.assign({}, state, {changed: false});
    case RESET:
      return {...state, baseBackground: "#01581F",
        baseRightCircle: "#B44040",
        baseWrongCircleOne: "#948534",
        baseWrongCircleTwo: "#57CC14",
        gameBackground: '#01581F',
        gameRightCircle: '#B44040',
        gameWrongCircleOne: '#948534',
        gameWrongCircleTwo: '#57CC14',
        popup: false,
        changed: false
      }
    default:
      return state;
  }
}

//initial state for the game option
const initialOption = {
  option: "Main",
}

//Function for changing the game option
export const selectGameOption = (state = initialOption, action = {}) => {
  switch(action.type) {
    case SELECT_OPTION:
      return {...state, option: action.payload};
    case RESET_OPTION:
      return {...state, option: 'Main'};
    case RESET:
      return {...state, option: 'Main'};
    default:
      return state;
  }
}

//initial state for the other page controllers
const initialGameState = {
  gameState: false,
  oneGamePlayed: false,
  secondInfoState: false,
  thirdInfoState: false,
  aboutState: false,
  statState: false,
  firstGame: true,
  secondGame: false,
  gamesPlayed: 0,
  fourthInfoState: false,
  endSystem: false,
  colorChangeState: false,
}

//Function for changing to other pages in the application
export const changeGameState = (state = initialGameState, action = {}) => {
  switch(action.type) {
    case START_GAME:
      return {...state, gameState: true}
    case END_GAME:
      return {...state, gameState: false,
        gamesPlayed: initialGameState.gamesPlayed += 1}
    case BACK_GAME:
      return {...state, gameState: false}
    case FIRST_GAME:
      return {...state, firstGame: false}
    case ABOUT_STATE:
      return {...state, aboutState: true}
    case END_ABOUT_STATE:
      return {...state, aboutState: false}
    case STAT_STATE:
      return {...state, statState: true, aboutState: false, gameState: false}
    case END_STAT_STATE:
      return {...state, statState: false}
    case INFO_STATE:
      return {...state, secondInfoState: true, gameState: false,
        gamesPlayed: initialGameState.gamesPlayed = 1}
    case END_INFO_STATE:
      return {...state, secondInfoState: false}
    case INFO_STATE_TWO:
      return {...state, thirdInfoState: true, gameState: false,
        gamesPlayed: initialGameState.gamesPlayed = 2}
    case END_INFO_STATE_TWO:
      return {...state, thirdInfoState: false}
    case INFO_STATE_THREE:
      return {...state, fourthInfoState: true, gameState: false,
        gamesPlayed: initialGameState.gamesPlayed = 3}
    case END_INFO_STATE_THREE:
      return {...state, fourthInfoState: false}
    case END_SYSTEM:
      return {...state, endSystem: true}
    case COLOR_CHANGE:
      return {...state, colorChangeState: true, fourthInfoState: false, thirdInfoState: false}
    case END_COLOR_CHANGE:
      return {...state, colorChangeState: false}
    case RESET:
      return {...state, gameState: false,
        oneGamePlayed: false,
        secondInfoState: false,
        thirdInfoState: false,
        aboutState: false,
        statState: false,
        firstGame: true,
        secondGame: false,
        gamesPlayed: 0,
        fourthInfoState: false,
        endSystem: false,
        infoStateFourPrevOpen: false,
        colorChangeState: false,
      }
    default:
      return state;
  }
}

//Initial state for user information
const initialLoginState = {
  user: null,
  loggedIn: false,
  infoPopup: false,
  admin: null
}

//Function for changing the user information to include login information
export const changeUser = (state = initialLoginState, action = {}) => {
  switch(action.type) {
    case LOGIN:
      return Object.assign({}, state, {user: action.payload[0], loggedIn: true,
      infoPopup: action.payload[1], admin: action.payload[2]});
    case CLOSE_INFO_POPUP:
      return Object.assign({}, state, {infoPopup: false})
    default:
      return state;
  }
}
