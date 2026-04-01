import { React } from 'react';
import { startExercise } from '@/reducers/lab2/actions';
import { useNavigate } from 'react-router-dom';

const IDEIntroduction = () => {
  const handleContinue = () => {
    startExercise();
    navigate('/Lab13/Exercise/Conclusion');
  };

  return (
    <div>
      AI/Search Panel with IDE Fixes Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default IDEIntroduction;
