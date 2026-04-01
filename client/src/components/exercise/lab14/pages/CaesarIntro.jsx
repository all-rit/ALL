import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import LabButton from '../../../all-components/LabButton';
import CaesarImage from '../../../../assets/images/lab14/caesarcipher.png';

const CaesarIntro = () => {
  const handleContinue = () => {
    navigate('/Lab14/Exercise/CaesarEncryption');
  };

  return (
    <div>
      <h1 className="tw-title tw-text-left">The Caesar Cipher</h1>
      <p className="tw-body-text tw-text-left tw-py-4">
        The Caesar Cipher is one the most popular and basic substitution
        ciphers. Dating back over 2000 years, this cipher was used by (and named
        after) Julius Caesar to securely communicate with his generals.
      </p>

      <h2 className="tw-sub-title tw-text-left tw-mt-6">How it Works</h2>
      <div className="tw-flex tw-flex-row tw-justify-center lg:tw-justify-between tw-flex-wrap xl:tw-mr-16 lg:tw-flex-nowrap tw-gap-4 xl:tw-gap-x-8">
        <div className="lg:tw-max-w-[600px] lg:tw-min-w-[300px]">
          <p className="tw-body-text tw-text-left tw-py-4">
            This cipher works by shifting each letter in a plaintext message by
            a fixed number, called the &apos;key&apos;. For example, with a key
            of 3, the letter &apos;A&apos; becomes &apos;D&apos;. When the key
            is large enough, letters near the end of the alphabet will
            &apos;wrap around&apos; to the beginning and count from there. For
            example, with the key still at 3, the letter &apos;Y&apos; would
            become &apos;B&apos;. This is then repeated for every letter in the
            phrase.
          </p>
          <p className="tw-body-text tw-text-center">
            This encryption algorithm can be modelled as the following:
          </p>
          <p className="tw-font-bold tw-italics tw-text-center">(L + K) % 26</p>
          <p className="tw-body-text tw-text-center">
            Where <strong>&apos;L&apos;</strong> is the letter you want to
            shift, and <strong>&apos;K&apos;</strong> is the key.
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-items-center tw-max-w-[600px] tw-min-w-[400px] tw-mb-8">
          <img src={CaesarImage} />
          <div className="tw-flex tw-flex-row">
            <p>Sourced from:&nbsp;</p>
            <a
              href="https://www.vcalc.com/wiki/caesar-cipher-encrypt"
              target="_blank"
              rel="noreferrer"
            >
              vCalc Caesar Cipher Page
            </a>
          </div>
        </div>
      </div>

      <h2 className="tw-sub-title tw-text-left tw-mt-6">
        The Decryption Algorithms
      </h2>
      <p className="tw-body-text tw-text-left tw-my-2">
        Below, you will see the breakdown of how both Classic and Quantum
        computers use algorithms to solve the Caesar Cipher, as well as the
        base-time complexity of cracking these codes.
      </p>
      <div className="tw-flex tw-flex-row tw-justify-center tw-my-8 tw-gap-16 tw-w-full tw-flex-wrap lg:tw-flex-nowrap">
        <div className="tw-flex tw-flex-col tw-max-w-[500px] tw-min-w-[300px] tw-gap-y-4 tw-flex-1">
          <h1 className="tw-sub-title">Classic Computer Decryption</h1>
          <p className="tw-body-text tw-text-left">
            With there being 26 letters in the English alphabet, the maximum
            shift amount for a Caesar Cipher is 25. This means that the largest
            amount of checks that a Classic Computer would have to do to
            brute-force solve this Cipher is 25.
          </p>
          <p className="tw-body-text tw-text-left">
            When the worst case scenario for an algorithm is checking every
            single element possible, we call that O(N) time complexity, where
            &apos;N&apos; is the number of elements to search (25).
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-max-w-[500px] tw-min-w-[300px] tw-gap-4 tw-flex-1">
          <h1 className="tw-sub-title">Quantum Decryption</h1>
          <p className="tw-body-text tw-text-left">
            While a Classic Computer solves the Caesar Cipher in O(N) time, when
            using Grover&apos; search algorithm, Quantum can search for the
            correct element much faster. Through the use of Quantum Physics, the
            base-time complexity for Quantum Computers is{' '}
            <span className="tw-math">O(&radic;N)</span>, meaning the greatest
            amount of elements that need to be searched is 5.
          </p>
          <p className="tw-body-text tw-text-left">
            Rather than searching every key one-by-one, Grover&apos;s algorithm
            uses repeated &quot;amplification&quot; steps to increase the
            probability of the correct key standing out. Below, you can find an
            academic paper explaining each of these concepts in depth.
          </p>
          <a
            className="tw-underline"
            href="https://eprint.iacr.org/2021/554.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Paper: Grover on Caesar and Vigenère Cipher
          </a>
        </div>
      </div>

      <h2 className="tw-sub-title tw-text-left tw-mt-6">Simulation</h2>
      <p className="tw-text-body tw-text-left tw-py-2">
        On the next page, you will be able to see these algorithms in action.
        Click the &apos;Continue&apos; button to start the activity!
      </p>

      <div className="tw-mt-10">
        <LabButton onClick={handleContinue} label={'Continue'} />
      </div>
    </div>
  );
};
export default CaesarIntro;
