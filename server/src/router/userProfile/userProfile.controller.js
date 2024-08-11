const { getAllProject } = require("../../models/user/user.model");

function httpGetAppProject(req, res){
    return res.status(200).json(getAllProject())
};

function httpPostMessage(req, res){
    const inputData = req.body;
    console.log(inputData)
}

module.exports = {httpGetAppProject, httpPostMessage}