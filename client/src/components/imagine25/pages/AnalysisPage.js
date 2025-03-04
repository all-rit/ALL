import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import ImagineService from "src/services/ImagineService";

const AnalysisPage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const user = await ImagineService.getUserByID(
        sessionStorage.getItem("userID"),
        25,
      );

      console.log(user.avatar.clotheColor);
      switch (user.section) {
        case "experiential":
          setContent(
            <p>
              Sorry, you&apos;r shirt is {user.avatar.clotheColor}, we simply
              cannot tolerate such awful choices and you and your teammte are
              both are disqualified.
            </p>,
          );
          break;
        case "expression":
          setContent(
            <p>
              Sorry, you&apos;r teammate&apos;s shirt is{" "}
              {user.teammateAvatar.clotheColor}, we simply cannot tolerate such
              awful choices and you you and your teammte are both are
              disqualified.
            </p>,
          );
          break;
        case "control":
          setContent(<p>Congrats on winnning!</p>);
          break;
        default:
          setContent("");
          break;
      }
    };
    fetchContent();
  }, []);

  return (
    <div className="tw-body-text tw-text-center tw-w-[30%] tw-mx-auto">
      {content}
      <Button
        className="btn btn-primary text-black btn-xl text-uppercase tw-m-3"
        onClick={() => alert("no next yet")}
      >
        Next
      </Button>
    </div>
  );
};

export default AnalysisPage;
