import { React } from 'react';
import { navigate } from 'react-router-dom';
import LabButton from '@/components/all-components/LabButton';

const IDEIntroduction = () => {
  const handleContinue = () => {
    navigate('/Lab13/Exercise/IDEExercise');
  };

  return (
    <div className="tw-space-y-6 mx-auto tw-flex tw-flex-col">
      <h1 className="tw-text-left tw-font-bold">AI Cognitive Bias Repair</h1>
      <p className="tw-text-left">
        There are quite a few types of biases that can impact how we view our AI
        chatbot responses! Let&apos;s explore a few common ways to mitigate
        these biases through some common additions to AI chatbots that can help
        us reduce the issue of experiencing cognitive biases.
      </p>
      <p className="tw-text-left">
        Some of these additions include making the AI chatbot provide a
        <strong> confidence score</strong>. Confidence scores are the way the
        chatbot let&apos;s the user know how sure it is that it completed
        it&apos;s request. Be careful though, this is not the same as an
        accuracy score.
      </p>
      <p className="tw-text-left">
        Another additions would be the <strong>disclaimer</strong> text that
        many AI chatbots include somewhere in their interface. Disclaimers are a
        great way to have a constant reminder to their user that AI can be wrong
        and should be double-checked.
      </p>
      <p className="tw-text-left">
        Finally, another common addition is having the AI chatbot provide
        <strong> citations</strong> for where it got its information from. This
        is a great way to help users fact-check the information provided by the
        AI chatbot and reduce the chances of falling for misinformation.
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
