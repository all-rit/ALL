import "@xyflow/react/dist/style.css";

export const COLORS = {
  YELLOW: {
    width: "6rem",
    borderWidth: 2,
    fontWeight: "bold",
    backgroundColor: "#fff3d9",
    borderColor: "#fcce14",
  },
  PURPLE: {
    width: "6rem",
    borderWidth: 2,
    fontWeight: "bold",
    backgroundColor: "#f4d9ff",
    borderColor: "#e08fff",
  },
  RED: {
    width: "6rem",
    borderWidth: 2,
    fontWeight: "bold",
    backgroundColor: "#ffd9d9",
    borderColor: "#fe7070",
  },
  BLUE: {
    width: "6rem",
    borderWidth: 2,
    fontWeight: "bold",
    backgroundColor: "#edf5ff",
    borderColor: "#6db1ff",
  },
  WHITE: {
    width: "6rem",
    borderWidth: 2,
    fontWeight: "bold",
    backgroundColor: "#ffffff",
    borderColor: "#000000",
  },
  GREEN: {
    width: "6rem",
    borderWidth: 2,
    fontWeight: "bold",
    backgroundColor: "#c3f7c8",
    borderColor: "#54c45e",
  },
};

export const createNode = (id, position, label, color, type) => {
  return {
    id,
    type,
    position,
    data: { label },
    style: {
      ...color,
    },
  };
};

export const createEdge = (
  source,
  target,
  animated,
  type,
  style,
  markerEnd,
  label,
) => {
  return {
    id: `${source}->${target}`,
    source,
    target,
    animated,
    type,
    style: {
      stroke: "#000000",
      strokeWidth: 2,
      ...style,
    },
    data: { label },
    markerEnd,
  };
};
