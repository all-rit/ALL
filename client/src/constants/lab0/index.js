// Section Categories
const SECTION_CATEGORY_DESIGN = "DESIGN";
const SECTION_CATEGORY_BACKEND = "BACKEND";
const SECTION_CATEGORY_FRONTEND = "FRONTEND";

const SELECTION_ROUTE = "/";
const DESIGN_LAB_INTRO = "LabIdeation";
const SCRUM_INTRO = "ScrumIntroduction";
const DEVELOP_LAB_INTRO = "DevelopLabIntro";
const SCRUM_BOARD_ACTIVITY = "ScrumBoardActivity";
// All sections, which double as routes too
const SECTION_LAB_IDEATION = "LabIdeation";
const SECTION_EXPERIENTIAL_EXERCISE = "LabDecision";
const SECTION_WIREFRAMING_OVERVIEW = "WireframeIntro";
const SECTION_SPRINT_PLANNING = "ScrumIntro";
const SECTION_LAB_DATA_REPAIR = "LabDataRepair";
const SECTION_SCHEMA_REPAIR = "SchemaRepair";
const SECTION_SERVICE_CONTROLLER_REPAIR = "ServiceControllerRepair";
const SECTION_ROUTING_INTRO = "APIRequestReading";
const SECTION_ROUTING_REPAIR = "RoutingRepair";
const SECTION_BACKEND_TIPS_TRICKS = "BackendTipsTricks";
const SECTION_BOILERPLATE_REPAIR = "BoilerplateRepair";
const SECTION_INTEGRATION_REPAIR = "IntegrationRepair";
const SECTION_CORE_LAB_PAGES_REPAIR = "CoreLabPagesRepair";
const SECTION_COMPONENT_LIBRARY = "ComponentLibrary";
const SECTION_FRONTEND_TIPS_TRICKS = "FrontendTipsTricks";

// All routes
const ROUTES = {
  SELECTION_ROUTE,
  DESIGN_LAB_INTRO,
  DEVELOP_LAB_INTRO,
  SCRUM_INTRO,
  SCRUM_BOARD_ACTIVITY,
  SECTION_LAB_IDEATION,
  SECTION_EXPERIENTIAL_EXERCISE,
  SECTION_WIREFRAMING_OVERVIEW,
  SECTION_SPRINT_PLANNING,
  SECTION_LAB_DATA_REPAIR,
  SECTION_SCHEMA_REPAIR,
  SECTION_SERVICE_CONTROLLER_REPAIR,
  SECTION_ROUTING_REPAIR,
  SECTION_BACKEND_TIPS_TRICKS,
  SECTION_BOILERPLATE_REPAIR,
  SECTION_INTEGRATION_REPAIR,
  SECTION_CORE_LAB_PAGES_REPAIR,
  SECTION_COMPONENT_LIBRARY,
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
  [SECTION_LAB_DATA_REPAIR]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_LAB_DATA_REPAIR,
    displayName: "Basic Lab Data",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_SCHEMA_REPAIR]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_SCHEMA_REPAIR,
    displayName: "Database Design & Schema Models",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_SERVICE_CONTROLLER_REPAIR]: {
    category: SECTION_CATEGORY_BACKEND,
    name: SECTION_SERVICE_CONTROLLER_REPAIR,
    displayName: "Service Layer & Controllers",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_ROUTING_REPAIR]: {
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
  [SECTION_BOILERPLATE_REPAIR]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_BOILERPLATE_REPAIR,
    displayName: "Lab Boilerplate Setup",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_INTEGRATION_REPAIR]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_INTEGRATION_REPAIR,
    displayName: "Backend Integration",
    imageURL: "/img/lab_thumbnails/wrench.jpg",
  },
  [SECTION_CORE_LAB_PAGES_REPAIR]: {
    category: SECTION_CATEGORY_FRONTEND,
    name: SECTION_CORE_LAB_PAGES_REPAIR,
    displayName: "Core Lab Pages",
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

export { ROUTES, SECTIONS, SECTION_STATUSES };
