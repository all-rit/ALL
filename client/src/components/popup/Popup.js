import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { updatePopup } from '../../reducers/app/Actions';

import Conditional from '../../helpers/Conditional';

const mapStateToProps = (state) => {
  return {
    popup: state.app.popup,
    popupType: state.app.popupType
  };
};

const mapDispatchToProps = {
  updatePopup
};

class Popup extends Component {
  closePopup() {
    this.props.updatePopup('');
  }

	render() {
    const { popup, popupType } = this.props;
    const popupStyles = classNames({
      popup__content: true,
      'popup__content--success': (popupType === 'success')
    });

    return (
      <div className="popup">
        <Conditional if={popup !== ""}>
          <div className={popupStyles}>
            <span className="popup__message">{popup}</span>
            <span className="popup__close" onClick={this.closePopup.bind(this)}>&times;</span>
          </div>
        </Conditional>
      </div>
    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
