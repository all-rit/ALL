import React, {Component} from 'react';

class Popup extends Component {
  close() {
    const {handler} = this.props;

    handler('');
  }

  render() {
    const {message, error} = this.props;

    if (message === '') return null;

    return (
      <div className="popup">
        <div className={`popup__content ${error ? 'popup__error' : ''}`}>
          <span className="popup__message">{message}</span>
          <span className="popup__close" onClick={this.close.bind(this)}>
            &times;
          </span>
        </div>
      </div>
    );
  }
}

export default Popup;
