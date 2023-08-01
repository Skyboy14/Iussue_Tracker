const ProjectModel = require("../models/projectDetails");
const BugModel = require('../models/bugDetails');


module.exports.createIssuePage = async function (req, res) {
    try {
        const project = await ProjectModel
            .findById(req.params.id)

        res.render('createIssue',
            {
                title: "Create Issue",
                project
            })
    }
    catch (err) { console.log('error occured', err) }
}


module.exports.createIssue = async function (req, res) {
    try {
        const project = await ProjectModel
            .findById(req.params.id)

        const issue = await BugModel
            .create({
                title: req.body.title,
                description: req.body.description,
                label: req.body.label,
                issueAuthor: req.body.author
            })

        // adding the issue in project model
        console.log('akash-001-2', issue)
        project.issues.push(issue)
        await project.save()
        await issue.save()
        res.redirect("back")
    }
    catch (err) { console.log('error occured', err, req.body) }
}