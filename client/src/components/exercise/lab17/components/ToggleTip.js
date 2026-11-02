import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

/**
 * A keyboard-accessible toggletip component that displays a speech-bubble popover
 * with a title, description, and optional child elements at the bottom.
 * @param {Object} props - The props for the ToggleTip component.
 * @param {boolean} props.isOpen - Whether the toggletip is currently open.
 * @param {Function} props.onClose - Callback fired when the toggletip closes (e.g. Escape key).
 * @param {React.RefObject} props.triggerRef - Reference to the trigger element.
 * @param {string} props.placement - Placement relative to the trigger ("auto", "top", "bottom").
 * @param {string} props.title - Heading text inside the toggletip.
 * @param {string} props.description - Body description text inside the toggletip.
 * @param {React.ReactNode} props.children - Optional UI elements appended to the bottom of the toggletip.
 * @param {string} props.className - Optional additional CSS classes.
 * @returns {React.ReactNode} The rendered ToggleTip component.
 */
const ToggleTip = ({
  isOpen = false,
  onClose,
  triggerRef,
  placement = "auto",
  title = "",
  description = "",
  children,
  className = "",
}) => {
  // default popover placement is top unless specified
  const [resolvedPlacement, setResolvedPlacement] = useState(
    placement === "auto" ? "top" : placement,
  );

  const popoverRef = useRef(null);
  const isPlacedBelow = resolvedPlacement === "bottom";

  // calculate whether the popover should appear above or below the trigger
  const updatePlacement = () => {
    if (placement !== "auto") {
      setResolvedPlacement(placement);
      return;
    }
    if (!triggerRef?.current || !popoverRef.current) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const containerRect = triggerRef.current
      .closest("[data-stage-container]")
      ?.getBoundingClientRect();

    const topBoundary = Math.max(0, containerRect?.top ?? 0);
    const bottomBoundary = Math.min(
      window.innerHeight,
      containerRect?.bottom ?? window.innerHeight,
    );

    const spaceAbove = triggerRect.top - topBoundary;
    const spaceBelow = bottomBoundary - triggerRect.bottom;
    const popoverHeight = popoverRef.current.offsetHeight;

    const shouldPlaceBelow =
      spaceAbove < popoverHeight && spaceBelow > spaceAbove;
    setResolvedPlacement(shouldPlaceBelow ? "bottom" : "top");
  };

  // recalculate placement and listen for Escape key when open
  useEffect(() => {
    if (!isOpen) return undefined;

    updatePlacement();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
        triggerRef?.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, placement]);

  if (!isOpen) {
    return null;
  }

  const bubblePosition = isPlacedBelow
    ? "tw-top-full tw-mt-5"
    : "tw-bottom-full tw-mb-5";

  const pointerPosition = isPlacedBelow
    ? "tw-bottom-full tw-border-b-[20px] tw-border-b-white tw-border-t-0"
    : "tw-top-full tw-border-t-[20px] tw-border-t-white tw-border-b-0";

  return (
    <div
      ref={popoverRef}
      className={`tw-absolute ${bubblePosition} tw-z-10 tw-w-60 md:tw-w-64 tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-3 tw-flex tw-flex-col tw-items-center tw-text-center ${className}`}
      role="dialog"
      aria-label={title || "Toggle tip"}
    >
      {title && (
        <h3 className="tw-title tw-text-2xl tw-text-black tw-mt-0 tw-mb-1">
          {title}
        </h3>
      )}
      {description && (
        <p className="tw-body-text tw-text-center tw-text-black tw-mt-0 tw-mb-2.5">
          {description}
        </p>
      )}
      {children}

      {/* speech bubble pointer */}
      <div
        className={`tw-absolute tw-left-0 tw-right-0 tw-mx-auto tw-w-0 tw-h-0 tw-border-l-[14px] tw-border-l-transparent tw-border-r-[14px] tw-border-r-transparent tw-border-solid ${pointerPosition}`}
      />
    </div>
  );
};

ToggleTip.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.any }),
  placement: PropTypes.oneOf(["auto", "top", "bottom"]),
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ToggleTip;

