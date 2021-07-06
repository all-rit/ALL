import React from 'react';
import './title.css';

/*
Displays the title of the page dependent on the state it is in
State options: Home page or Exercise apge
*/
const Title = ({exerciseState, replay}) => {
  return (
    <div>
      {exerciseState?
        <div>
          <p
            className='mainTitle'
          >
            Let the Exercise Begin!
          </p>
          <p
            className='secondTitle'
          >
            Click as fast as you can the correct colored circle!
          </p>
        </div>
        :
        <div>
        {replay?
          <div>
            <p
              className='mainTitle'
            >
              Exercise Over!
            </p>
            <p
              className='secondTitle'
            >
              Check out your score and click the button when ready to move on!
            </p>
          </div>
          :
          <div>
            <p
              className='mainTitle'
            >
              Color Clicker
            </p>
            <p
              className='secondTitle'
            >
              How fast can you click the correct colored circle?
            </p>
          </div>
        }
        </div>
      }
    </div>
  );
}

export default Title;
