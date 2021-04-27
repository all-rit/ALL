import { Component } from "react";
import {PageService} from "../../../services/PageService";
import {GAME_PLAYING} from "../../../constants/index";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    labid: state.main.lab
});

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
        PageService.createPage(this.state.name, this.state.secondsElapsed, this.props.labid);
        clearInterval(this.interval);
    }
    render() {
        return null;
    }
}

export default connect(mapStateToProps)(PageServiceTimer);

