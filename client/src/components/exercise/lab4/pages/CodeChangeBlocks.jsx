import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { amber, green, red, yellow } from '@mui/material/colors';
import SnackbarContent from '@mui/material/SnackbarContent';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import RepairService from '../../../../services/lab4/RepairService';
import { EXERCISE_PLAYING } from '@/constants/index';
import useMainStateContext from '@/reducers/MainContext';
import RepairUpdateButton from '../../../all-components/RepairUpdateButton';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
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
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  const messageStyle = { marginLeft: '10px' };
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
          size="large"
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

const CodeChangeBlocks = () => {
  const { actions } = useMainStateContext();

  const [textValue, setTextValue] = useState('');
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [message, setMessage] = useState(
    'Please type code before updating code!',
  );

  const handleChange = (event) => {
    setTextValue(event.target.value);
    console.log('handled change value: ' + textValue);
    Prism.highlightAll();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBarOpen(false);
    console.log('SnackBar Closed');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (textValue === '' || textValue === null) {
      setMessage('Please type code before updating code!');
      setSnackBarOpen(true);
    } else {
      window.location.state = {
        role: textValue,
      };
      RepairService.submitRepairSkip(textValue);
      navigate('/Lab4/Exercise/FormSkipToMainFixed');
    }
    Prism.highlightAll();
  };

  const doEvent = (obj, event) => {
    const eventInit = new Event(event, { target: obj, bubbles: true });
    return obj ? obj.dispatchEvent(eventInit) : false;
  };

  useEffect(() => {
    actions.updateUserState(EXERCISE_PLAYING);
    Prism.highlightAll();
    if (window.location.state?.role !== undefined) {
      const el0 = document.getElementById('first');
      el0.value = window.location.state.role;
      doEvent(el0, 'input');
    }
  }, []);

  return (
    <div>
      <div className={'tw-p-3'}>
        <h2 className="tw-title tw-text-left tw-pb-3">Repair</h2>
        <p className="tw-body-text tw-text-left">
          The intent of this code repair is to allow people who navigate
          sequentially through content more direct access to the primary content
          of the Web page and skip over repeated blocks. These include but are
          not limited to navigation links, heading graphics, and advertising
          frames.
        </p>
      </div>
      <form onSubmit={handleSubmit} noValidate autoComplete={'off'}>
        <div className={'tw-rounded-lg'}>
          <pre>
            <code className="language-html">
              {`/* add the following in the input: <a className="skip-main" href="#main">Skip to main content</a> */
`}
            </code>
            <input
              type={'text'}
              id="first"
              className={'tw-bg-[#333] tw-text-primary-yellow'}
              style={{ width: '600px' }}
              value={textValue}
              placeholder=""
              onChange={handleChange}
              aria-label={
                'add the following: <a className="skip-main" href="#main">Skip to main content</a>'
              }
            />

            <code className="language-html">
              {`
<div>
  <header>...</header>
</div>
<div>
  <nav>...</nav>
</div>
  <form id="main">...</form>
</div>
                      `}
            </code>
          </pre>
        </div>
        <RepairUpdateButton disabled={!textValue} />
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="warning"
          message={message}
        />
      </Snackbar>
    </div>
  );
};

export default CodeChangeBlocks;
