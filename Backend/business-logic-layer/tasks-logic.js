require("../data-access-layer/dal");
const TaskModel = require("../models/task-model");
const MemberModel = require("../models/member-model");

function getAllMembersAsync () {
    return MemberModel.find().exec();
}

function getAllTasksAsync () {
    return TaskModel.find().populate("member").exec();
}

function addTaskAsync (task) {
    return task.save();
}

function deleteTaskAsync (_id) {
    return TaskModel.deleteOne({ _id }).exec();
}

module.exports = {
    getAllMembersAsync,
    getAllTasksAsync,
    addTaskAsync,
    deleteTaskAsync
}