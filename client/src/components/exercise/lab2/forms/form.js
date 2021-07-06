import React, {Component} from 'react';
import './formStyle.css';

/*
Class for gathering extra information from individuals logging into the system
*/
class Form extends Component {

  //Constructor for holding immediate state in the system
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      course: null,
      useCase: '',
      deficiency: null,
      age: null
    }
  }

  //Handles submitting the form information to the backend
  onClick = () => {
    const {nickname, course, useCase, deficiency, age} = this.state;
    if (nickname === '' && course === null && useCase === '' &&
      deficiency === null && age === null) {
      this.props.closeInfoPopup();
    } else {
      const data = {
        nickname,
        course,
        useCase,
        deficiency,
        age
      };
      fetch('http://localhost:5000/formAnswers', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(data)
      })
      .then(response => console.log(response))
      .then(this.props.closeInfoPopup())
      .catch(err => console.log(err));
    }
  }

  //Handles changes to the nickname field (updates state)
  onNicknameChange = (event) => {
    this.setState({nickname: event.target.value})
  }

  //Handles changes to the course fied (updates state)
  onCourseChange = (event) => {
    this.setState({course: event.target.value})
  }

  //Handles changes to the use case field (updates state)
  onUseCaseChange = (event) => {
    this.setState({useCase: event.target.value})
  }

  //Handles changes to the deficiency field (updates state)
  onDeficiencyChange = (event) => {
    this.setState({deficiency: event.target.value})
  }

  //Handles changes to the age field (updates state)
  onAgeChange = (event) => {
    this.setState({age: event.target.value})
  }

  //Renderer method for the system
  render() {
    return (
      <div className='mainForm'>
        <div>
          <p className='header1'>
            Additional Questions
          </p>
          <p className='header2'>
            In order to understand more about you as a user, we ask that you fill
            out this form.
          </p>
          <p className='header2'>
            It will help to understand who is using the application,
            for what purpose the application is being used for, and if it is
            useful in your studies.
          </p>
          <p className='header2'>
            All questions are optional, but we appreciate any information you can
            provide. Thank you for your time.
          </p>
          <p className='header2'>
            All answers are anonymous and will only be used to better this
            application.
          </p>
          <p className='header3'>
            To skip this survey, please just click submit at the bottom of the
            page
          </p>
        </div>
        <hr></hr>
        <div className='formQuestions'>
          <div>
            <p>
              1). Is there a nickname you would like for us to refer to you as?
              (This is the only non-anonymous part of the survey)
            </p>
            <input
              className='inputForm'
              type='text'
              onChange={this.onNicknameChange}
            >
            </input>
          </div>
          <div>
            <p>
              2). What course are you currently enrolled in that requires you to
              use this application? (Please select from the options below)
            </p>
            <select
              className='selectForm'
              name='course'
              onChange={this.onCourseChange}
            >
              <option value=''>No Class</option>
              <option value='CS1'>Computer Science 1</option>
              <option value='CS2'>Computer Science 2</option>
              <option value='SWEN261'>Intro to Software Engineering</option>
              <option value='CSAPX'>AP Computer Science or Computer Science for
                transfers</option>
              <option value='TG'>Testing Group</option>
              <option value='O'>Other (Please specify below)</option>
            </select>
          </div>
          <div>
            <p>
              3). If you aren't using this for a course, or your course wasn't
              listed above, why did you choose to visit this website?
            </p>
            <input
              className='inputForm'
              type='text'
              onChange={this.onUseCaseChange}
            >
            </input>
          </div>
          <div>
            <p>
              4). Do you have any color vision deficiencies? (Please select from
                the options below)
            </p>
            <select
              className='selectForm'
              name='cvd'
              onChange={this.onDeficiencyChange}
            >
              <option value=''>No Deficiencies/Prefer Not to Answer</option>
              <option value='P'>
                Protanomaly (reduced sensitivity to red light)
              </option>
              <option value='D'>
                Deuteranomaly (reduced sensitivity to green light)
              </option>
              <option value='T'>
                Tritanomaly (reduced sensitivity to blue light)
              </option>
              <option value='RG'>
                A combination of both Protanomaly and Deuteranomaly
              </option>
              <option value='M'>
                Monochromacy (complete color deficiency in seeing colors)
              </option>
            </select>
          </div>
          <div>
            <p>
              5). What is your current age? (Please select from the options
                below)
            </p>
            <select
              className='selectForm'
              name='age'
              onChange={this.onAgeChange}
            >
              <option value=''>Prefer Not to Answer</option>
              <option value='U5'>Under 8 Years Old</option>
              <option value='U10'>8 to 16 Years Old</option>
              <option value='U24'>17 to 24 Years Old</option>
              <option value='U36'>25 to 32 Years Old</option>
              <option value='U40'>33 to 40 Years Old</option>
              <option value='U48'>41 to 48 Years Old</option>
              <option value='U56'>49 to 56 Years Old</option>
              <option value='U64'>57 to 64 Years Old</option>
              <option value='65UP'>65 Years or Older</option>
            </select>
          </div>
          <button className='formSubmit' onClick={this.onClick}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Form;
