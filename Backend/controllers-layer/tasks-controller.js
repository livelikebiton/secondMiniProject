const express = require("express");
const logic = require("../business-logic-layer/tasks-logic");
const TaskModel = require("../models/task-model");
const router = express();

router.get("/members", async (request, response) => {
    try {
        const members = await logic.getAllMembersAsync();
        response.json(members);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/tasks", async (request, response) => {
    try {
        const tasks = await logic.getAllTasksAsync();
        response.json(tasks);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.post("/tasks", async (request, response) => {
    try {
        const task = new TaskModel(request.body);
        const errors = task.validateSync();
        if (errors) return response.status(400).send(errors);
        const addedTask = await logic.addTaskAsync(task);
        response.status(201).json(addedTask);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.delete("/tasks/:_id", async (request, response) => {
    try {
        const _id = request.params._id
        await logic.deleteTaskAsync(_id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// function checkTime() {
//     let currentTime = new Date();
//     let y = currentTime.getFullYear();
//     let m = currentTime.getMonth()+1;
//     let d = currentTime.getDay();

//     return y + "-" + m + "-" + d;
// }

module.exports = router;