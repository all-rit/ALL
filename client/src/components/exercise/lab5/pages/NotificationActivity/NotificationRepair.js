import React, {Component} from 'react';
import RepairService from '../../../../../services/lab5/RepairService';
import PageServiceTimer from '../../../shared/PageServiceTimer';
import Popup from '../../../shared/Popup';
import {navigate} from '@reach/router';
import {minFontNotif, maxFontNotif} from '../../../../../constants/lab5';

class NotificationRepair extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsizevalue: null,
      timeout: null,
      timeouterror: null,
      fontsizeerror: null,
      repairerror: true,
      componentName: 'NotificationRepair',
    };
  }

  componentWillMount() {
    const {data} = this.props;
    this.setState({
      fontsizevalue: data.fontsizevalue,
      timeout: data.timeout,
    });
  }
  validateRepair(e) {
    let error = false;
    Object.keys(this.state).map((name) => {
      switch (name) {
        case 'fontsizevalue':
          const fontsize = parseInt(this.state[name]);
          if (
            fontsize > maxFontNotif ||
            fontsize < minFontNotif ||
            isNaN(fontsize)
          ) {
            error = true;
            this.setState({
              fontsizeerror: `Must enter between ${minFontNotif}px and ${maxFontNotif}px`,
            });
          } else {
            this.setState({fontsizeerror: null});
          }
          break;
        case 'timeout':
          const timeout = parseInt(this.state[name]);
          if (timeout < 4000 || isNaN(timeout)) {
            error = true;
            this.setState({timeouterror: 'Must be 4000 or greater'});
          } else {
            this.setState({timeouterror: null});
          }
          break;
        default:
          break;
      }
      return [];
    });
    this.setState({repairerror: error}, () => this.handleSubmit(e));
  }

  handleSubmit(event) {
    const {handlers} = this.props;
    const {fontsizevalue, timeout} = this.state;

    event.preventDefault();
    if (!this.state.repairerror) {
      const repair = JSON.stringify({
        fontsizevalue,
        timeout,
      });
      // Submit a repair entry in the database.
      RepairService.submitRepair(this.state.componentName, repair);
      handlers.updatePopup('The repairs have been made.');
    } else {
      handlers.updatePopup('Errors in Repair. Please fix');
    }
    // Update the state and close the repair.
    handlers.updateRepairNotification(fontsizevalue, timeout);
    handlers.closeRepair();

    setTimeout(() => {
      handlers.updatePopup('');
    }, 6000);
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleNav() {
    navigate('/Lab5/Exercise/NotificationAccessibleRepair');
  }

  render() {
    const {visible, handlers, state, data, actions} = this.props;
    return (
      <div>
        <div className="cognitive_instructions margin-bottom-2">
          Let's increase the notification time and font-size to improve
          readability. Click 'Repair' to make the appropriate changes.
        </div>
        <Popup
          message={state.app5.popupMessage}
          handler={actions.updatePopup}
          error={this.state.repairerror}
        />

        <button
          className="btn btn-second btn-xl text-uppercase  leftButton"
          onClick={handlers.openRepair}
          key="repair"
        >
          Repair
        </button>
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={this.handleNav}
          key="Next"
          disabled={this.state.repairerror}
        >
          Next
        </button>
        {visible && (
          <div className="code_editor">
            <div className="code_editor__content">
              <div className="code_editor__files">
                <div className="code_editor__file code_editor__file--active">
                  NotificationAccessible.js
                </div>
              </div>

              <div className="code_editor__code">
                <div className="code_editor__line">
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; This is where you can can add headings and lists
                    to allow easier reading
                  </span>
                </div>
                <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    import&nbsp;
                  </span>
                  <span className="code_editor__line--blue">React</span>
                  <span className="code_editor__line--gold">,&nbsp;</span>
                  <span className="code_editor__line--gold">&#123;</span>
                  <span className="code_editor__line--blue">
                    &nbsp;Component&nbsp;
                  </span>
                  <span className="code_editor__line--gold">&#125;&nbsp;</span>
                  <span className="code_editor__line--purple">from&nbsp;</span>
                  <span className="code_editor__line--orange">'react'</span>
                  <span className="code_editor__line--gold">;</span>
                </div>
                <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    import&nbsp;
                  </span>
                  <span className="code_editor__line--gold">&#123;&nbsp;</span>
                  <span className="code_editor__line--purple">
                    AccessibleMessage
                  </span>
                  <span className="code_editor__line--gold">
                    &nbsp;&#125;&nbsp;
                  </span>
                  <span className="code_editor__line--purple">from&nbsp;</span>
                  <span className="code_editor__line--orange">
                    '../constants/lab5'
                  </span>
                  <span className="code_editor__line--gold">;</span>
                </div>
                <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    import&nbsp;
                  </span>
                  <span className="code_editor__line--gold">Notification</span>
                  <span className="code_editor__line--purple">
                    &nbsp;from&nbsp;
                  </span>
                  <span className="code_editor__line--orange">
                    '../components/Notification'
                  </span>
                  <span className="code_editor__line--gold">;</span>
                </div>

                <div className="code_editor__line">&nbsp;</div>

                <div className="code_editor__line">
                  <span className="code_editor__line--blue">class&nbsp;</span>
                  <span className="code_editor__line--green">
                    NotificationAccessible&nbsp;
                  </span>
                  <span className="code_editor__line--blue">extends&nbsp;</span>
                  <span className="code_editor__line--green">
                    Component&nbsp;
                  </span>
                  <span className="code_editor__line--gold">&#123;</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;</span>
                  <span className="code_editor__line--yellow">render</span>
                  <span className="code_editor__line--purple">() &#123;</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--purple">return</span>
                  <span className="code_editor__line--blue">&nbsp;(</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">div</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">div</span>
                  <span className="code_editor__line--blue">
                    &nbsp;className
                  </span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--orange">
                    "cognitive_instructions"
                  </span>
                  <span className="code_editor__line--darkblue">
                    &nbsp;&#62;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--white">
                    There is a notification that has appeared. Click on it to
                    view it! Note: it can only be viewed once.
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">/div</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47;Enter a value of 4000(ms) or greater in the input
                    below
                  </span>
                </div>
                <div className="code_editor__line code_editor__line-background--light">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--gold">Notification</span>
                  <span className="code_editor__line--blue">&nbsp;timeout</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#123;&nbsp;</span>
                  <span>
                    <input
                      name="timeout"
                      type="text"
                      defaultValue={data.timeout}
                      onChange={this.changeHandler.bind(this)}
                      required
                      title="must be atleast 4000"
                      className={
                        this.state.timeouterror ? 'form-error-input' : ''
                      }
                    />
                  </span>
                  <span className="code_editor__line--white">
                    &nbsp;&#125;&nbsp;
                  </span>
                  <span className="code_editor__line--blue">message</span>
                  <span className="code_editor__line--white">
                    &nbsp;=&nbsp;
                  </span>
                  <span className="code_editor__line--white">&#123;&nbsp;</span>
                  <span className="code_editor__line--purple">
                    AccessibleMessage
                  </span>
                  <span className="code_editor__line--white">
                    &nbsp;&#125;&nbsp;
                  </span>
                  <span className="code_editor__line--darkblue">/&#62;</span>
                </div>
                {this.state.timeouterror && (
                  <div className="code_editor__line">
                    <span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                    <span className="form-error">
                      {this.state.timeouterror}
                    </span>
                  </div>
                )}

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">
                    &#60;button&#62;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--white">&nbsp;Next</span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">
                    &#60;/button&#62;
                  </span>
                </div>
                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--darkblue">&#60;</span>
                  <span className="code_editor__line--darkblue">/div</span>
                  <span className="code_editor__line--darkblue">&#62;</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  <span className="code_editor__line--blue">)</span>
                  <span>;</span>
                </div>

                <div className="code_editor__line">
                  <span>&nbsp;&nbsp;</span>
                  <span className="code_editor__line--purple">&#125;</span>
                </div>

                <div className="code_editor__line">
                  <span className="code_editor__line--gold">&#125;</span>
                </div>

                <div className="code_editor__line">&nbsp;</div>

                <div className="code_editor__line">
                  <span className="code_editor__line--purple">
                    export&nbsp;
                  </span>
                  <span className="code_editor__line--purple">
                    default&nbsp;
                  </span>
                  <span className="code_editor__line--blue">
                    NotificationAccessible
                  </span>
                  <span>;</span>
                </div>
              </div>
            </div>

            <div className="code_editor__content">
              <div className="code_editor__files">
                <div className="code_editor__file code_editor__file--active">
                  Notification.css
                </div>
              </div>
              <div className="code_editor__code">
                <div className="code_editor__line">
                  <span className="code_editor__line--darkgreen">
                    &#47;&#47; This is where you can change the page format
                    styling.
                  </span>
                </div>
                <p className="code_editor__class">.notification &#123;</p>
                <div className="code_editor__form">
                  <div className="code_editor__line">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="code_editor__line--darkgreen">
                      &#47;&#47; Change font-size to value between{' '}
                      {minFontNotif}px and {maxFontNotif}px.
                    </span>
                  </div>
                  <div className="code_editor__property code_editor__line-background--light">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>font-size:&nbsp;</span>
                    <span>
                      <input
                        name="fontsizevalue"
                        type="text"
                        defaultValue={data.fontsizevalue}
                        onChange={this.changeHandler.bind(this)}
                        title={`must enter between ${minFontNotif}px and ${maxFontNotif}px`}
                        className={
                          this.state.fontsizeerror ? 'form-error-input' : ''
                        }
                      />
                    </span>
                  </div>
                  {this.state.fontsizeerror && (
                    <div className="code_editor__line">
                      <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                      <span className="form-error">
                        {this.state.fontsizeerror}
                      </span>
                    </div>
                  )}
                </div>
                <p className="code_editor__class">&#125;</p>
              </div>
            </div>
            <button
              onClick={this.validateRepair.bind(this)}
              type="submit"
              className="button button--green button--block"
            >
              Update
            </button>
          </div>
        )}
        <PageServiceTimer actions={handlers} name={this.state.componentName} />
      </div>
    );
  }
}

export default NotificationRepair;
