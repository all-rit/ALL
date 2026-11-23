import React, { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import TaskCard from "../components/TaskCard";
import useMainStateContext from "src/reducers/MainContext";
import { ExerciseService } from "src/services/lab17/ExerciseService";
import { STAGE_1_TASKS } from "src/constants/lab17";
import allie1 from "src/assets/images/allie/allie(walking1).svg";
import allie2 from "src/assets/images/allie/allie(walking2).svg";

const CARD_GAP_PX = 12; // gap between allie and task card

// 5 tasks will be passed into the stage for each round
const QvCGameStage = ({ stageTasks = STAGE_1_TASKS }) => {
  const { state } = useMainStateContext();
  const userid = state?.main?.user?.userid;
  const [task1, task2, task3, task4, task5] = stageTasks;

  const [avatarPos, setAvatarPos] = useState({ x: 0, y: 0 });
  const [activeCardIndex, setActiveCardIndex] = useState(null); // null = bottom-center start
  const [facingRight, setFacingRight] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [walkFrame, setWalkFrame] = useState(1);

  const taskBoxRef = useRef(null);
  const avatarRef = useRef(null);
  const cardRefs = useRef([]);

  // Single source of truth for Allie's target coordinates
  const calculateTargetPos = useCallback((cardIndex) => {
    // measuring task box pixels
    const boxRect = taskBoxRef.current.getBoundingClientRect();
    // measuring how big allie's avatar is
    const avatarRect = avatarRef.current.getBoundingClientRect();

    // if no card is selected, or the card doesn't exist, return to default position
    if (cardIndex === null || !cardRefs.current[cardIndex]) {
      return {
        x: boxRect.width / 2 - avatarRect.width / 2,
        y: Math.max(8, boxRect.height - avatarRect.height - 24),
      };
    }

    // measure size and position of current card, convert measurements to be
    // relative to inside task card box
    const cardRect = cardRefs.current[cardIndex].getBoundingClientRect();
    const cardLeft = cardRect.left - boxRect.left;
    const cardRight = cardLeft + cardRect.width;
    const cardCenterX = cardLeft + cardRect.width / 2;

    // allie horizontal coordinate: stand to the right of left-side cards, and to the left of right/center cards
    // add the gap between allie and the card
    const standOnRight = cardCenterX < boxRect.width / 2;
    const targetX = standOnRight
      ? cardRight + CARD_GAP_PX
      : cardLeft - avatarRect.width - CARD_GAP_PX;

    // allie vertical coordinate
    const targetY =
      cardRect.top - boxRect.top + cardRect.height / 2 - avatarRect.height / 2;

    // on small screens, leave the 8px around her so she doens't go out of bounds
    const clampedX = Math.max(
      8,
      Math.min(targetX, boxRect.width - avatarRect.width - 8)
    );
    const clampedY = Math.max(
      8,
      Math.min(targetY, boxRect.height - avatarRect.height - 8)
    );

    return { x: clampedX, y: clampedY };
    // [] means do once on change
  }, []);

  // keep Allie aligned on mount and whenever the container resizes or shortens
  useEffect(() => {
    const boxEl = taskBoxRef.current;

    const syncPosition = () => {
      // calculate allie's position, whether she is at the start spot or at a card
      const nextPos = calculateTargetPos(activeCardIndex);
      // changing the avatars new position ONLY if it actually changed, prevents re-renders
      setAvatarPos((prev) =>
        prev.x === nextPos.x && prev.y === nextPos.y ? prev : nextPos
      );
    };

    // runs right away at least once, on mount
    syncPosition();

    // if the task box changes size, if allie was in the midde of walking, she
    // will snap to the card that she is supposed to be at
    const handleResize = () => {
      setIsWalking(false); // Snap immediately on resize instead of triggering a walk
      syncPosition();
    };

    // check for older browsers, most browsers updated past 2020 should have ResizeObserver
    // support
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(handleResize);
      observer.observe(boxEl);
      return () => observer.disconnect();
    }

    // fallback for older browsers without ResizeObserver
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // rerun this function if activeCardIndex changes or calculateTargetPos changes
  }, [activeCardIndex, calculateTargetPos]);

  // alternate between allie1 and allie2 while walking
  useEffect(() => {
    // if she's not walking
    if (!isWalking) {
      // switch her to fram 1, where she is standing
      setWalkFrame(1);
      return;
    }

    // if she is walking, cycle through the two frames at 150 miliseconds interval
    const frameInterval = setInterval(() => {
      // if frame was 1, set to 2, and if it was 2, set to 1
      setWalkFrame((prev) => (prev === 1 ? 2 : 1));
    }, 150);

    return () => clearInterval(frameInterval);
    // runs when isWalking changes (she stopped walking or started walking)
  }, [isWalking]);

  // move allie next to user clicked task card
  const handleTaskClick = (index) => {
    // if allie is already at the active card, do nothing
    if (index === activeCardIndex) return;
    // if differnt card, calculate her new position
    const nextPos = calculateTargetPos(index);

    // if her new position is further right, flip her horizontally
    if (nextPos.x > avatarPos.x) setFacingRight(true);
    // if her new position is further left, flip her horizontally
    if (nextPos.x < avatarPos.x) setFacingRight(false);

    // save the card as her active card
    setActiveCardIndex(index);
    // update her position, so she slides over there
    setAvatarPos(nextPos);
  };

  // TODO: update this in future when making real stages so the exercise is only marked complete when all tasks are finished
  const handleContinue = async () => {
    try {
      if (userid) {
        const exerciseData = await ExerciseService.fetchExercise({ userid });
        await ExerciseService.submitExercise({
          userid,
          isExerciseComplete: true,
          hasViewed: exerciseData?.hasViewed || false,
        });
      }
    } catch (error) {
      console.error(error);
    }
    navigate("/Lab17/Exercise/ResultsPage");
  };

  return (
    <div className="center-div">
      <h1 className="tw-title tw-text-left">QvCGameStage</h1>
      <div className="tw-relative tw-bg-primary-blue tw-rounded-lg tw-min-h-[36rem] tw-p-6 md:tw-p-8 tw-my-6 tw-flex tw-flex-col lg:tw-flex-row tw-gap-6">
        {/* FLEXBOX --> left column on large screens, top row on smaller screens: tasks list box + quantum/classical icons box */}
        <div className="tw-flex tw-flex-col sm:tw-flex-row lg:tw-flex-col tw-gap-6 lg:tw-w-1/3">

          {/* STUB : task list box*/}
          <div className="tw-flex-1 tw-bg-black tw-text-white tw-p-6 tw-rounded-lg tw-flex tw-flex-col tw-justify-center tw-items-center">
            <h2>Tasks</h2>
            <div>Task Info</div>
          </div>

          {/* STUB : quantum/classical icons box */}
          <div className="tw-flex-1 tw-border-4 tw-border-solid tw-border-lightBlue tw-p-6 tw-rounded-lg tw-flex tw-flex-col tw-justify-center tw-gap-4">
            <div>
              Classical Icon
            </div>
            <div>
              Quantum Icon
            </div>
          </div>
        </div>

        {/* TASK CARDS BOX */}
        <div
          ref={taskBoxRef}
          className="tw-relative tw-flex-1 tw-border-4 tw-border-solid tw-border-lightBlue tw-rounded-lg tw-p-6 md:tw-p-8 tw-flex tw-flex-col tw-justify-between tw-gap-8 tw-min-h-[28rem]"
        >
          {/* top task row */}
          <div className="tw-flex tw-justify-center">
            {task1 && (
              <div
                // cardRefs.current[cardIndex] saving the card's ref in array according
                // to index instead of as separate variables
                ref={(el) => (cardRefs.current[0] = el)}
                onClick={() => handleTaskClick(0)}
                // lets the user know that the taskcard is clickable
                className="tw-cursor-pointer"
              >
                <TaskCard {...task1} />
              </div>
            )}
          </div>

          {/* middle task row */}
          <div className="tw-flex tw-justify-between tw-items-center">
            {task2 && (
              <div
                ref={(el) => (cardRefs.current[1] = el)}
                onClick={() => handleTaskClick(1)}
                className="tw-cursor-pointer"
              >
                <TaskCard {...task2} />
              </div>
            )}
            {task3 && (
              <div
                ref={(el) => (cardRefs.current[2] = el)}
                onClick={() => handleTaskClick(2)}
                className="tw-cursor-pointer"
              >
                <TaskCard {...task3} />
              </div>
            )}
          </div>

          {/* bottom task row */}
          <div className="tw-flex tw-justify-between tw-items-end">
            {task4 && (
              <div
                ref={(el) => (cardRefs.current[3] = el)}
                onClick={() => handleTaskClick(3)}
                className="tw-cursor-pointer"
              >
                <TaskCard {...task4} />
              </div>
            )}
            {task5 && (
              <div
                ref={(el) => (cardRefs.current[4] = el)}
                onClick={() => handleTaskClick(4)}
                className="tw-cursor-pointer"
              >
                <TaskCard {...task5} />
              </div>
            )}
          </div>

          {/* avatar layer */}
          <div
            ref={avatarRef}
            onTransitionEnd={(e) => {
              // when the avatar flips, it can send the message that the whole animation (walking and flipping) is done,
              // even though its not, (walking takes longer), so the flipping transition needs to be ignored
              if (e.target === e.currentTarget) {
                setIsWalking(false);
              }
            }}
            style={{
              // moving her to the position she needs to be in
              transform: `translate3d(${avatarPos.x}px, ${avatarPos.y}px, 0)`,
            }}
            // allie is anchored to the top left of the taskBoxRef and she can pass through
            // boxes in the event they are in her way
            className={`tw-absolute tw-top-0 tw-left-0 tw-pointer-events-none ${
              isWalking
                ? "tw-transition-transform tw-duration-700 tw-ease-in-out"
                : ""
            }`}
          >
            <img
              src={walkFrame === 1 ? allie1 : allie2}
              alt="allie"
              width="50"
              style={{
                // flipping the way shye is rendered based on if she is facingRight or not
                transform: facingRight ? "scaleX(-1)" : "scaleX(1)",
              }}
              // the flip takes her 200 miliseconds
              className="tw-transition-transform tw-duration-200"
            />
          </div>
        </div>
      </div>

      {/* continue button */}
      <div className="tw-flex tw-justify-evenly tw-mt-6">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="continue"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

QvCGameStage.propTypes = {
  stageTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      correctChoice: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
};

export default QvCGameStage;
