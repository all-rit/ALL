import { React } from 'react';
import { navigate } from '@reach/router';
import LabButton from 'src/components/all-components/LabButton';

const IDEIntroduction = () => {
  const handleContinue = () => {
    navigate('/Lab13/Exercise/IDEExercise');
  };

  return (
    <div className="tw-space-y-6 mx-auto tw-flex tw-flex-col">
      <h1 className="tw-text-left tw-font-bold">AI Cognitive Bias Repair</h1>
      <p className="tw-text-left">
        You just saw how confident wording, polished formatting, and technical
        language can influence how trustworthy an AI response feels, even before
        verifying it.
      </p>
      <p className="tw-text-left">
        In the real world, AI systems are designed with features that help
        reduce overreliance and encourage critical thinking. Some of these
        include:
      </p>

      <div className="tw-text-left tw-space-y-3">
        <p className="tw-pl-6">
          <span className="tw-font-semibold tw-bg-primary-yellow tw-px-1 tw-rounded-sm">
          <strong>Confidence Scores:</strong>
          </span>{' '}
          Show how certain the AI is about its response instead of presenting it
          as absolute truth.
        </p>

        <p className="tw-pl-6">
          <span className="tw-font-semibold tw-bg-primary-yellow tw-px-1 tw-rounded-sm">
            <strong>Citations:</strong>
          </span>{' '}
          Provide traceable sources so users can verify claims.
        </p>

        <p className="tw-pl-6">
          <span className="tw-font-semibold tw-bg-primary-yellow tw-px-1 tw-rounded-sm">
            <strong>Disclaimer Messages:</strong>
          </span>{' '}
          Remind users that AI outputs may be incorrect or incomplete.
        </p>

        <p className="tw-text-left tw-pt-3">
          AI doesn&apos;t have to feel authoritative to be useful. Now,
          it&apos;s your turn to implement these safeguards!
        </p>
      </div>
      <div className="tw-space-y-4">
        <p>
          Click <strong>&quot;Continue to Repair&quot;</strong> to proceed!
        </p>
        <LabButton onClick={handleContinue} label="Continue to Repair" />
      </div>
    </div>
  );
};

export default IDEIntroduction;
