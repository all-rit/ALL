import React, {Component} from 'react';
import '../../assets/stylesheets/signout.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions as appActions} from '../../reducers/AppReducer';

const mapStateToProps = (state) => ({
    state: state
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(appActions, dispatch)
});
/*
Function for handling the signout of a user
*/
const handleSignout = (actions) => {
    fetch( process.env.REACT_APP_SERVER_URL + '/logout', {
        method: 'GET',
        credentials: 'include',
        headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'X-Requested-With'}
    })
        .then(res => res.text())
        .then(() => {
            actions.updateUser(null);
            console.log('user updated');
            window.location.reload(false);
        })
        .catch(error => console.log(error));
};

/*
Component for the dropdown below a users name on the application
*/
class Signout extends Component {

    render() {
        const {user, actions} = this.props;
        return (
            <div className='dropdown signinButton'>
                <p className='username'>Welcome, {user}! &#9662;</p>
                <div className='dropdown-content'>
                    <button onClick={() => handleSignout(actions)} className='link'>
                        Signout
                    </button>
                </div>
            </div>
        );
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signout);