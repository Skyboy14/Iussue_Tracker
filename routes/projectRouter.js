const express = require("express");
const {
  createIssuePage,
  createIssue
} = require("../controllers/bugController");
const {
  homePage,
  createProjectPage,
  createProject,
  projectDetails,
} = require("../controllers/projectController");

const router = express.Router();

// home page
router.route("/").get(homePage);

// create project
router.route("/create_project").get(createProjectPage).post(createProject);

// project details page
router.route("/project_details/:id").get(projectDetails);

// create issue page
router.route("/create_issue/:id").get(createIssuePage).post(createIssue);


module.exports = router;