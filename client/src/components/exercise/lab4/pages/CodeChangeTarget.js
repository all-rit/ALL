import React, {Component} from 'react';
import {navigate} from '@reach/router';
import Prism from 'prismjs';
import Button from '@material-ui/core/Button';
import {Paper} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import CheckCircleIcon from '@material-ui/core/SvgIcon/SvgIcon';
import {amber, green, red, yellow} from '@material-ui/core/colors';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {EXERCISE_PLAYING} from '../../../../constants/lab4';
import RepairService from '../../../../services/lab4/RepairService';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
const minMax = {
  min: 44,
  max: 200,
};

function MySnackbarContentWrapper(props) {
  const classes = {
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: red,
    },
    info: {
      backgroundColor: yellow,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 10,
    },
    iconVariant: {
      opacity: 0.9,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  };
  const {className, message, onClose, variant, ...other} = props;
  const Icon = variantIcon[variant];
  const messageStyle = {marginLeft: '10px'};
  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span
          id="client-snackbar"
          className={classes.message}
          color={amber}
          aria-label={message}
        >
          <Typography variant={'body2'} style={messageStyle} gutterBottom>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />{' '}
            {message}
          </Typography>
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

class CodeChangeTarget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      textValue1: '',
      snackBarOpen: false,
      message: 'Please type code before updating code!',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    if (window.location.state !== undefined) {
      this.state = {
        textValue: window.location.state.width,
        textValue1: window.location.state.height,
        snackBarOpen: false,
        message: 'Please type code before updating code!',
      };
      window.location.state = {
        width: window.location.state.width,
        height: window.location.state.height,
      };
    } else {
      window.location.state = {
        width: null,
        height: null,
      };
    }
  }

  componentDidMount() {
    const {actions} = this.props;
    actions.updateState(EXERCISE_PLAYING);
    Prism.highlightAll();
    if (
      window.location.state.height !== undefined &&
      window.location.state.width !== undefined
    ) {
      const el0 = document.getElementById('first');
      el0.value = window.location.state.width;
      CodeChangeTarget.doEvent(el0, 'input');
      const el1 = document.getElementById('second');
      el1.value = window.location.state.height;
      CodeChangeTarget.doEvent(el1, 'input');
    }
  }

  handleChange(event) {
    this.setState({textValue: event.target.value}, () => {
      console.log('handled change value: ' + this.state.textValue);
      Prism.highlightAll();
    });
  }

  handleChange1(event) {
    this.setState({textValue1: event.target.value}, () => {
      console.log('handled change value: ' + this.state.textValue1);
      Prism.highlightAll();
    });
  }

  handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({snackBarOpen: false}, () => {
      console.log('SnackBar Closed');
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Width updated as: ' + this.state.textValue);
    console.log('Height updated as: ' + this.state.textValue1);
    if (this.state.textValue === '' || this.state.textValue1 === '') {
      this.setState({
        message: 'Please type code before updating code!',
        snackBarOpen: true,
      });
    } else if (
      parseInt(this.state.textValue) < minMax.min ||
      parseInt(this.state.textValue1) < minMax.min
    ) {
      this.setState({
        message: 'Please enter value greater than or equal to ' + minMax.min,
        snackBarOpen: true,
      });
    } else if (
      parseInt(this.state.textValue) > minMax.max ||
      parseInt(this.state.textValue1) > minMax.max
    ) {
      this.setState({
        message: 'Please enter value less than or equal to ' + minMax.max,
        snackBarOpen: true,
      });
    } else if (
      !/^\d+$/.test(this.state.textValue) ||
      !/^\d+$/.test(this.state.textValue1)
    ) {
      this.setState({
        message: 'Please enter numeric value',
        snackBarOpen: true,
      });
    } else {
      window.location.state = {
        width: this.state.textValue,
        height: this.state.textValue1,
      };
      RepairService.submitRepairButton(
          this.state.textValue1,
          this.state.textValue,
      );
      navigate('/Lab4/Exercise/SubmitUpdated');
    }
    Prism.highlightAll();
  }

  static doEvent(obj, event) {
    const eventInit = new Event(event, {target: obj, bubbles: true});
    return obj ? obj.dispatchEvent(eventInit) : false;
  }

  render() {
    const paperStyle = {
      marginLeft: '10px',
      marginRight: '10px',
      marginTop: '20px',
    };
    console.log('in codechangetarget');
    return (
      <div>
        {/* <CodeUpdateHeader
                    heading={"Make Code Changes"}
                    justifyAlignment={"space-between"}
                    helpMessage={"Set the min-width and min-height values to at least 44px."}
                /> */}
        <h2 className="playthrough__title">Repair</h2>
        <p className="app__instructions">
          The intent of this code repair is to ensure that target sizes are
          large enough for users to easily activate them, especially those with
          limited dexterity. Mice and similar pointing devices can be hard to
          use for these users, and a larger target will help them activate the
          target.
        </p>
        <form onSubmit={this.handleSubmit} noValidate autoComplete={'off'}>
          <Paper style={paperStyle}>
            <pre>
              <code className="language-css">
                {`
.button {
    marginRight: 10px;
    marginLeft: 10px;
    min-width: `}
              </code>{' '}
              <input
                type={'text'}
                id="first"
                value={this.state.textValue}
                placeholder="20"
                onChange={this.handleChange}
                aria-label={'Please set min width to 40px'}
              />
              <code className="language-css">{` px; /*Set to at least 44px*/
    min-height:`}</code>{' '}
              <input
                type={'text'}
                id="second"
                value={this.state.textValue1}
                placeholder="17"
                onChange={this.handleChange1}
                aria-label={'Please set min height to 40px'}
              />
              <code className="language-css">
                {` px; /*Set to at least 44px*/
    fontSize: 10px;
}
`}
              </code>
            </pre>
          </Paper>
          <br />
          <br />
          <Button
            type={'submit'}
            aria-label={'Update Code'}
            variant={'contained'}
            color={'primary'}
          >
            Update Code
          </Button>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackBarOpen}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="warning"
            message={this.state.message}
          />
        </Snackbar>
      </div>
    );
  }
}

export default CodeChangeTarget;
