import { Component } from "react";
import {PageService} from "../../../../services/PageService";
import {LAB_ID, GAME_PLAYING} from "../../../../constants/lab5/index";

class PageServiceTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {secondsElapsed: 0, name: this.props.name, gameState:this.props.gameState};
    }

    componentDidMount() {
        const { actions } = this.props;
        const gameState = this.props.gameState? this.props.gameState: GAME_PLAYING;
        actions.updateState(gameState);
        this.interval = setInterval(
            () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
            1000
        );
    }

    componentWillUnmount() {
        PageService.createPage(this.state.name, this.state.secondsElapsed, LAB_ID);
        clearInterval(this.interval);
    }
    render() {
        return null;
    }
}

export default PageServiceTimer;
