import React, { useRef, useEffect, useState } from "react";
import ALLButton from "src/components/all-components/ALLButton";
import ImagineService from "src/services/ImagineService";
import ImagineHeader from "../components/ImagineHeader";
import { navigate } from "@reach/router";

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [blob, setBlob] = useState(null);

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

      canvas.toBlob(function (blob) {
        setBlob(blob);
      }, "image/png");

      //copy to vivian branch
      // Get the image data in the desired format
      const imageDataUrl = canvas.toDataURL("image/png"); // Default is image/png
      setImageSrc(imageDataUrl);
    }
  };
  //copy to vivian branch
  //when the button is clicked, send the image to backend to generate the deepfake
  const sendImageforGeneration = async () => {
    if (!blob) {
      console.log("blob doesn't exist");
    }
    const form = new FormData();
    form.append("image", blob, "image.png");
    form.append("userId", sessionStorage.getItem("userID"));
    form.append("year", 26);
    const response = await ImagineService.generateDeepfake(form);
    console.log(response);
    navigate("/Imagine2026/DisplayDeepfake");
  };

  return (
    <div>
      <ImagineHeader title="VideoCapture"></ImagineHeader>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ width: "100%", maxWidth: "500px" }}
      />
      <br />
      <button onClick={capture}>Capture Photo</button>

      {/* Display the captured image */}
      {imageSrc && (
        <div>
          <h3>Captured Image:</h3>
          <img
            src={imageSrc}
            alt="Captured webcam feed"
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>
      )}

      {/* Copy to vivian branch */}
      <ALLButton onClick={sendImageforGeneration} />
    </div>
  );
};

export default WebcamCapture;
