import React, { useRef, useEffect } from "react";
import ALLButton from "src/components/all-components/ALLButton";
import { useImagine26Context } from "src/reducers/imagine/imagine26Context";
import ImagineHeader from "./ImagineHeader";

const PhotoCapture = () => {
  const videoRef = useRef(null);
  const { updatePhoto } = useImagine26Context();
  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };
    startWebcam();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const capture = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas"); // Create a canvas element
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");

      // Draw the current video frame onto the canvas
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageDataUrl = canvas.toDataURL("image/png");
      canvas.toBlob(function (blob) {
        updatePhoto(blob, imageDataUrl);
      }, "image/png");
    }
  };

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-mt-10">
      <ImagineHeader title="Take your profile picture!" />
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="tw-full tw-max-w-[500px] tw-rounded-lg tw-bg-black"
      />

      <div className="tw-mt-6">
        <ALLButton onClick={capture} label={"Take Picture"} />
      </div>
    </div>
  );
};

export default PhotoCapture;
