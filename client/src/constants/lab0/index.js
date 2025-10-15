// Section Categories
export const SECTION_CATEGORY_DESIGN = "DESIGN";
export const SECTION_CATEGORY_BACKEND = "BACKEND";
export const SECTION_CATEGORY_FRONTEND = "FRONTEND";

const SELECTION_ROUTE = "/";

// Intro
const SECTION_LAB_INTRODUCTION = "LabIntroduction";

// Design Lab
const SECTION_LAB_IDEATION = "LabIdeation";
const SECTION_DESIGN_NEW_CATEGORY = "DesignNewCategory";
const SECTION_DESIGN_SORT_NEW_CATEGORY = "DesignSortNewCategory";
const SECTION_EXPERIENTIAL_EXERCISE = "LabDecision";
const SECTION_EXPERIENTIAL_INTRODUCTION = "ExperientialIntro";
const SECTION_CREATE_EXPERIENTIAL_EXERCISE = "ExperientialExercise";
const SECTION_WIREFRAMING_OVERVIEW = "WireframeIntro";
const SECTION_WIREFRAME_FIRST_GLANCE = "WireframeFirstGlance";
const SECTION_WIREFRAME_REINFORCE_QUIZ = "WireframeReinforceQuiz";
const SECTION_WIREFRAME_EXERCISE = "WireframeExercise";
const SECTION_WIREFRAME_COMPONENTS = "WireframeComponents";
const SECTION_SPRINT_PLANNING = "ScrumIntro";
const SECTION_SCRUM_BOARD_ACTIVITY = "ScrumBoardActivity";
const SECTION_SCRUM_VELOCITY_READING = "ScrumVelocityReading";
const SECTION_SCRUM_VELOCITY_ACTIVITY = "ScrumVelocityActivity";
const SECTION_DESIGN_LAB_END = "DesignLabEnd";
// Backend
const SECTION_BACKEND_INTRODUCTION = "BackendIntroduction";
const SECTION_LAB_DATA = "LabData";
const SECTION_LAB_DATA_REPAIR = "LabDataRepair";
const SECTION_SCHEMA_DESIGN = "SchemaDesign";
const SECTION_SCHEMA_DESIGN_REPAIR = "SchemaDesignRepair";
const SECTION_SERVICE_CONTROLLER = "ServiceController";
const SECTION_SERVICE_CONTROLLER_REPAIR = "ServiceControllerRepair";
const SECTION_ROUTING = "Routing";
const SECTION_ROUTING_INTRO = "Routing";
const SECTION_ROUTING_REPAIR = "RoutingRepair";
const SECTION_BACKEND_TIPS_TRICKS = "BackendTipsTricks";

// Frontend
const SECTION_FRONTEND_INTRODUCTION = "FrontendIntroduction";
const SECTION_BOILERPLATE = "Boilerplate";
const SECTION_CORE_LAB_PAGES = "CoreLabPages";
const SECTION_CORE_LAB_PAGES_REPAIR = "CoreLabPagesRepair";
const SECTION_INTEGRATION = "Integration";
const SECTION_INTEGRATION_REPAIR = "IntegrationRepair";
const SECTION_COMPONENT_LIBRARY = "ComponentLibrary";
const SECTION_COMPONENT_LIBRARY_REPAIR = "ComponentLibraryRepair";
const SECTION_FRONTEND_TIPS_TRICKS = "FrontendTipsTricks";

// Labels
const INITIAL_SHORT_NAME_LABEL = "Select the Correct Lab Short Name";
const INITIAL_WALKTHROUGH_VIDEO_LABEL = "Select the Correct Walkthrough URL";
const INITIAL_CATEGORY_LABEL = "Select Correct Category";
const INITIAL_SHORT_DESCRIPTION_LABEL = "Select Correct Short Description";

// Correct Answers
const CORRECT_SHORT_NAME = "Focus Order";
const CORRECT_CATEGORY = "Accessibility";
const CORRECT_WALKTHROUGH_VIDEO =
  "https://www.youtube.com/accessible-learning-labs/lab-14-walkthrough";
const CORRECT_SHORT_DESCRIPTION =
  "Explore how keyboard navigation flows through web interfaces.";

const LABELS = {
  INITIAL_SHORT_NAME_LABEL,
  INITIAL_WALKTHROUGH_VIDEO_LABEL,
  INITIAL_CATEGORY_LABEL,
  INITIAL_SHORT_DESCRIPTION_LABEL,
};

const ANSWERS = {
  CORRECT_SHORT_NAME,
  CORRECT_CATEGORY,
  CORRECT_WALKTHROUGH_VIDEO,
  CORRECT_SHORT_DESCRIPTION,
};

// All routes
const ROUTES = {
  SELECTION_ROUTE,
  // Intro
  SECTION_LAB_INTRODUCTION,

  // Design Lab
  SECTION_LAB_IDEATION,
  SECTION_DESIGN_NEW_CATEGORY,
  SECTION_DESIGN_SORT_NEW_CATEGORY,
  SECTION_EXPERIENTIAL_EXERCISE,
  SECTION_EXPERIENTIAL_INTRODUCTION,
  SECTION_CREATE_EXPERIENTIAL_EXERCISE,
  SECTION_WIREFRAMING_OVERVIEW,
  SECTION_WIREFRAME_FIRST_GLANCE,
  SECTION_WIREFRAME_REINFORCE_QUIZ,
  SECTION_WIREFRAME_EXERCISE,
  SECTION_WIREFRAME_COMPONENTS,
  SECTION_SPRINT_PLANNING,
  SECTION_SCRUM_BOARD_ACTIVITY,
  SECTION_SCRUM_VELOCITY_READING,
  SECTION_SCRUM_VELOCITY_ACTIVITY,
  SECTION_DESIGN_LAB_END,

  // Backend
  SECTION_BACKEND_INTRODUCTION,
  SECTION_LAB_DATA,
  SECTION_LAB_DATA_REPAIR,
  SECTION_SCHEMA_DESIGN,
  SECTION_SCHEMA_DESIGN_REPAIR,
  SECTION_SERVICE_CONTROLLER,
  SECTION_SERVICE_CONTROLLER_REPAIR,
  SECTION_ROUTING,
  SECTION_ROUTING_REPAIR,
  SECTION_BACKEND_TIPS_TRICKS,

  // Frontend
  SECTION_FRONTEND_INTRODUCTION,
  SECTION_BOILERPLATE,
  SECTION_INTEGRATION,
  SECTION_INTEGRATION_REPAIR,
  SECTION_CORE_LAB_PAGES,
  SECTION_CORE_LAB_PAGES_REPAIR,
  SECTION_COMPONENT_LIBRARY,
  SECTION_COMPONENT_LIBRARY_REPAIR,
  SECTION_FRONTEND_TIPS_TRICKS,
};

// All section objects (image URLs not final)
const SECTIONS = {
  [SECTION_LAB_IDEATION]: {
    category: SECTION_CATEGORY_DESIGN,
    name: SECTION_LAB_IDEATION,
    displayName: "Lab Ideation",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_EXPERIENTIAL_EXERCISE]: {
    category: SECTION_CATEGORY_DESIGN,
    name: SECTION_EXPERIENTIAL_EXERCISE,
    displayName: "Experiential Exercise",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_WIREFRAMING_OVERVIEW]: {
    category: SECTION_CATEGORY_DESIGN,
    name: SECTION_WIREFRAMING_OVERVIEW,
    displayName: "Wireframing Overview",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_SPRINT_PLANNING]: {
    category: SECTION_CATEGORY_DESIGN,
    name: SECTION_SPRINT_PLANNING,
    displayName: "Sprint Planning",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_BACKEND_INTRODUCTION]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_BACKEND_INTRODUCTION,
    displayName: "Backend Development",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_LAB_DATA]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_LAB_DATA,
    displayName: "Basic Lab Data",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_SCHEMA_DESIGN]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_SCHEMA_DESIGN,
    displayName: "Database Design & Schema Models",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_SERVICE_CONTROLLER]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_SERVICE_CONTROLLER,
    displayName: "Service Layer & Controllers",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_ROUTING]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_ROUTING_INTRO,
    displayName: "API Endpoints & Routing",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_BACKEND_TIPS_TRICKS]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_BACKEND_TIPS_TRICKS,
    displayName: "Backend Tips & Tricks",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_FRONTEND_INTRODUCTION]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_FRONTEND_INTRODUCTION,
    displayName: "Frontend Development",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_BOILERPLATE]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_BOILERPLATE,
    displayName: "Lab Boilerplate Setup",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_CORE_LAB_PAGES]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_CORE_LAB_PAGES,
    displayName: "Core Lab Pages",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_INTEGRATION]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_INTEGRATION,
    displayName: "Backend Integration",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_COMPONENT_LIBRARY]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_COMPONENT_LIBRARY,
    displayName: "Component Library",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_FRONTEND_TIPS_TRICKS]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_FRONTEND_TIPS_TRICKS,
    displayName: "Frontend Tips & Tricks",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
};

// Section status
const SECTION_IN_PROGRESS = "IN_PROGRESS";
const SECTION_COMPLETED = "COMPLETED";

// Section status enum
const SECTION_STATUSES = {
  SECTION_IN_PROGRESS,
  SECTION_COMPLETED,
};

export { ROUTES, SECTIONS, SECTION_STATUSES, LABELS, ANSWERS };
