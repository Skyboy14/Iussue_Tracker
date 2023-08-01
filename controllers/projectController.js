const ProjectModel = require("../models/projectDetails");

// Home Page to show projects
module.exports.homePage = async function (req, res) {
    try {
        let allProjects = await ProjectModel
            .find({})
            .sort('-createdAt')

        res.render('homePage',
            {
                title: "Issue Tracker ",
                allProjects
            })
    }
    catch (err) { console.log('error occured', err) }
}

// Create Project page
module.exports.createProjectPage = async function (req, res) {
    try {
        res.render('createProject',
            {
                title: "Create Project "
            })
    }
    catch (err) { console.log('error occured', err) }
}

// Create Project (save form data)
module.exports.createProject = async function (req, res) {
    try {
        const project = await ProjectModel
            .create({
                projectName: req.body.projectName,
                description: req.body.description,
                author: req.body.author
            })
        await project.save()
        res.redirect('/')
    }
    catch (err) { console.log('error occured', err) }
}

// Project Details Page
module.exports.projectDetails = async function (req, res) {
    try {
        const project = await ProjectModel
            .findById(req.params.id)
            .populate({ path: "issues" })

        res.render('projectDetails',
            {
                title: " Project Details ",
                project
            })
    }
    catch (err) { console.log('error occured', err) }
}