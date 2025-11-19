import { React } from "react";
import { navigate } from "@reach/router";
import LabButton from "../../../all-components/LabButton";
import CaesarImage from "../../../../assets/images/lab14/caesarcipher.png";

const CaesarIntro = () => {
  const handleContinue = () => {
    navigate("/Lab14/Exercise/CaesarEncryption");
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
      <div className="tw-flex tw-flex-row tw-justify-between tw-flex-wrap tw-gap-x-8">
        <div className="tw-w-1/3 tw-max-w-[600px] tw-min-w-[400px]">
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
          <p className="tw-georgia tw-italics tw-text-center">(x + k) % 26</p>
        </div>
        <div className="tw-flex tw-flex-col tw-max-w-[700px] tw-min-w-[400px] tw-mr-16">
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

      <div className="tw-mt-10">
        <LabButton onClick={handleContinue} label={"Continue"} />
      </div>
    </div>
  );
};
export default CaesarIntro;
