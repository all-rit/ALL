

const getGameState = (state) =>{
    const lab = state.main.lab;
    switch (lab){
        case 1:
            return state.game1.state
        case 2:
            return state.game2.changeGameState.gameState ? "GAME_PLAYING":"GAME_IDLE"
        case 3:
            return state.game3.state
        case 4:
            return state.game4.state
        case 5:
            return state.game5.state
        default:
            return state.game1.state
    }


}

export default getGameState;