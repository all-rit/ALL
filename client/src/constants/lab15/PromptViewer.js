export const ANIM_NONE = "";
export const ANIM_FADE_IN = "pv-fade-in";
export const ANIM_LOCK_POP = "pv-lock-pop";
export const ANIM_FADE_DURATION_MS = 400;
export const ANIM_POP_DURATION_MS = 450;

export const KEYFRAME_CSS = `
  @keyframes pv-fadeSlideIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pv-lockPop {
    0%   { transform: scale(1); }
    35%  { transform: scale(1.04); }
    100% { transform: scale(1); }
  }
  .pv-fade-in  { animation: pv-fadeSlideIn 0.32s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
  .pv-lock-pop { animation: pv-lockPop 0.38s ease both; }
`;

export const SECTION_STATE_STYLES = {
  empty:
    "tw-bg-secondary-gray tw-outline tw-outline-1 tw-outline-labGray [box-decoration-break:clone] [-webkit-box-decoration-break:clone] tw-bg-labGray tw-transition-all tw-duration-300 tw-italic",
  active:
    "tw-bg-labYellow tw-outline tw-outline-1 tw-outline-darkLine [box-decoration-break:clone] [-webkit-box-decoration-break:clone] tw-transition-all tw-duration-300 tw-not-italic",
  locked:
    "tw-bg-success tw-outline tw-outline-1 tw-outline-hoverSuccess [box-decoration-break:clone] [-webkit-box-decoration-break:clone] tw-transition-all tw-duration-300 tw-not-italic",
};
