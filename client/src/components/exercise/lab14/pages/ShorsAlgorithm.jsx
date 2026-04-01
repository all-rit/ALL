import { React } from 'react';
import { startExercise } from '@/reducers/lab2/actions';
import { navigate } from 'react-router-dom';

const ShorsAlgorithm = () => {
  const handleContinue = () => {
    startExercise();
    // TODO: Update this to next Page
    navigate('/Lab14/Exercise/Conclusion');
  };

  return (
    <div>
      Shors Algorithm Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default ShorsAlgorithm;
