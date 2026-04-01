import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import LabButton from '../../../all-components/LabButton';
import VigenereImage from '../../../../assets/images/lab14/vigenerecipher.jpg';
import VigenereGraph from '../../../../assets/images/lab14/vigeneregraph.png';

const VigenereIntro = () => {
  const handleContinue = () => {
    navigate('/Lab14/Exercise/VigenereEncryption');
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">The Vigenère Cipher</h1>
      <p className="tw-body-text tw-text-left tw-py-4">
        The Vigenère Cipher is a derivative of the Caesar Cipher, and uses many
        of the same properties. Originally invented in 1553, it took over 300
        years until a consistent process was discovered to crack it. This
        difficulty gave it the name &quot;The Indecipherable Cipher&quot;.
      </p>

      <h2 className="tw-sub-title tw-text-left tw-mt-6">How it Works</h2>
      <div className="tw-flex tw-flex-row tw-justify-center lg:tw-justify-between tw-flex-wrap xl:tw-mr-16 lg:tw-flex-nowrap tw-gap-4 xl:tw-gap-x-8">
        <div className="lg:tw-max-w-[600px] lg:tw-min-w-[300px]">
          <p className="tw-body-text tw-text-left tw-py-4">
            This cipher works by shifting each letter in a plaintext message by
            a different Caesar Cipher, where the shift value of <i>that</i>{' '}
            Caesar Cipher is the value of a letter in a base key message. For
            example, let&apos;s say we wanted to encrypt the word <i>quantum</i>
            , and we chose the key for this encryption to be <i>cryptography</i>
            . To encode this, we follow these simple steps:
          </p>
          <div className="tw-flex tw-flex-col tw-gap-2 tw-w-full tw-px-8 tw-mb-4">
            <p className="tw-text-left">
              1. Start with the first character of the message. We shift this
              letter <i>q</i> by the value of the first character of the key{' '}
              <i>c</i>. Shifting <i>q</i> by 2 (the letter <i>a</i> is valued at
              0 instead of 1) gives us <i>s</i>.
            </p>
            <p className="tw-text-left">
              2. Repeat for the second character. We shift the letter <i>u</i>{' '}
              by <i>r</i>, yielding <i>l</i>.
            </p>
            <p className="tw-text-left">
              3. Repeat for all possible characters in the message! The message{' '}
              <i>quantum</i> encrypted with key <i>cryptography</i> yields{' '}
              <i>slycmis</i>.
            </p>
            <p className="tw-text-left">
              4. If your key is shorter in length than your message, you may
              restart at the beginning of the key after using all the letters.
              For example, if the message is <i>accessible</i>, and the key is{' '}
              <i>lab</i>, the key is repeated for the length of the message:{' '}
              <i>lablablabl</i>.
            </p>
          </div>
          <p className="tw-body-text tw-text-left tw-mb-4">
            When encoding and decoding, it can be helpful to use a Vigenère
            Table. This table allows you to quickly align digits within the
            cipher to speed up the shifting process.
          </p>
          <p className="tw-body-text tw-text-center">
            For each letter, this encryption algorithm can be modelled as the
            following:
          </p>
          <p className="tw-font-bold tw-italics tw-text-center">
            E<sub>i</sub> = (L<sub>i</sub> + K<sub>i</sub>) % 26
          </p>
          <p className="tw-body-text tw-text-center">
            Where{' '}
            <strong>
              L<sub>i</sub>
            </strong>{' '}
            is the encrypted letter,{' '}
            <strong>
              P<sub>i</sub>
            </strong>{' '}
            is your message&apos;s letter, and{' '}
            <strong>
              K<sub>i</sub>
            </strong>{' '}
            is the key&apos;s letter.
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-max-w-[600px] tw-min-w-[400px] tw-mb-8">
          <img src={VigenereImage} alt="Image showing a Vigenère Table." />
          <p>
            Sourced from:&nbsp;
            <a
              href="https://www.britannica.com/topic/Vigenere-cipher"
              target="_blank"
              rel="noreferrer"
            >
              Encyclopedia Brittanica&apos;s Vigenère Cipher Page
            </a>
          </p>
        </div>
      </div>

      <h2 className="tw-sub-title tw-text-left tw-mt-6">
        The Decryption Algorithms
      </h2>
      <p className="tw-body-text tw-text-left tw-my-2">
        Below, you will see the breakdown of how both Classic and Quantum
        computers use algorithms to solve the Vigenère Cipher, as well as the
        base-time complexity of cracking these codes.
      </p>
      <div className="tw-flex tw-flex-row tw-justify-center tw-my-8 tw-gap-16 tw-w-full tw-flex-wrap lg:tw-flex-nowrap">
        <div className="tw-flex tw-flex-col tw-max-w-[500px] tw-min-w-[300px] tw-gap-y-4 tw-flex-1">
          <h1 className="tw-sub-title">Classic Computer Decryption</h1>
          <p className="tw-body-text tw-text-left">
            There are many types of decryption algorithms for the Vigenère
            Cipher. Below are a few of them outlined:
          </p>
          <p className="tw-body-text tw-text-left">
            <strong>1. Brute Force: </strong> Brute force attacks try every
            single possibility. For a Vigenère cipher, this would mean trying
            every possible key of every possible length. Since there are 26
            letters in the English alphabet, and the amount of checks required
            grows exponentially with the length of the key, the base-time
            complexity of a brute-force attack would be O(26<sup>k</sup>), where{' '}
            <i>k</i> is the length of the key.
          </p>
          <p className="tw-body-text tw-text-left">
            <strong>2. Statistical Analysis: </strong> If the message is long
            enough, an algorithm can analyze the characters for repeated
            sequences to determine the length of the key used. Once that is
            known, the text can be split along that length <i>k</i> into
            smaller, separate Caesar Ciphers. Then, each of these parts are
            solved like a normal Caesar Cipher, and the code is cracked. While
            it is difficult to estimate, using algorithms like the Kasiski
            Examination yield a base-time complexity around ~O(n<sup>2</sup>).
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-max-w-[500px] tw-min-w-[300px] tw-gap-4 tw-flex-1">
          <h1 className="tw-sub-title">Quantum Decryption</h1>
          <p className="tw-body-text tw-text-left">
            If we recall back to the Quantum implementation of the Caesar
            Cipher, the Grover search algorithm sped up the Classic
            Computer&apos;s brute-force attack from O(N) time to O(&radic;N)
            time. this was a major improvement, and can also be seen here with
            the Vigenère Cipher as well.
          </p>
          <p className="tw-body-text tw-text-left">
            Grover&apos;s algorithm speeds up the decoding of the Vigenère
            Cipher from O(26<sup>k</sup>) to O(&radic;26<sup>k</sup>). This may
            be difficult to visualize, so below is a graph showing how much more
            efficient Quantum Computers are for solving this problem.
          </p>
          <div className="tw-flex tw-max-h-[400px]">
            <img
              className="tw-object-scale-down"
              src={VigenereGraph}
              alt="Graph depicting the different time complexities of Brute-Force, Statistical Analysis and Grover Search algorithms."
            />
          </div>
        </div>
      </div>

      <h2 className="tw-sub-title tw-text-left tw-mt-6">Simulation</h2>
      <p className="tw-text-body tw-text-left tw-py-2">
        On the next page, you will be able to see these algorithms in action.
        Click the <strong>Continue</strong> button to start the activity!
      </p>

      <div className="tw-mt-10">
        <LabButton onClick={handleContinue} label={'Continue'} />
      </div>
    </div>
  );
};
export default VigenereIntro;
