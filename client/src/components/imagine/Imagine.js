/* eslint-disable react/prop-types */
import {Router} from '@reach/router';
import React from 'react';
import AvatarSelection from './pages/AvatarSelection';
import ImagineEnd from './pages/ImagineEnd';
import ImagineStart from './pages/ImagineStart';
import MatchLobby from './pages/MatchLobby';
import TicTacToe from './pages/TicTacToe';
import {transitions, positions, Provider} from 'react-alert';
import AlertMUITemplate from 'react-alert-template-mui';

const Imagine = (props) => {
  const {user, biasType, linkNum} = props;

  const options = {
    timeout: 10000,
    position: positions.MIDDLE,
    transition: transitions.SCALE,
  };

  return (
    <section className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase tw-text-right">
              {'ID#' + user?.userid}
            </h2>
          </div>
        </div>
      </div>
      <Provider template={AlertMUITemplate} {...options}>
        <div className="container bottomSpace">
          <Router className="app">
            <ImagineStart path="/" user={user} linkNum={linkNum} />
            <AvatarSelection
              path="/AvatarSelection"
              user={user}
              linkNum={linkNum}
            />
            <MatchLobby
              path="/MatchLobby"
              user={user}
              biasType={biasType}
              linkNum={linkNum}
            />
            <TicTacToe path="/TicTacToe" user={user} linkNum={linkNum} />
            <ImagineEnd path="/End" user={user} linkNum={linkNum} />
          </Router>
        </div>
      </Provider>
    </section>
  );
};

export default Imagine;
