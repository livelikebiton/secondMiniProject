const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    description: {
        type: String,
        required: [true, "Missing Task Description"],
        unique: true
    },
    taskDate: {
        type: Date,
        required: [true, "Missing Task Date"]
    },
    memberId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Missing MemberId"]
    }
}, { versionKey: false, toJSON: { virtuals: true }, id: false});

TaskSchema.virtual("member", {
    ref: "MemberModel",
    localField: "memberId",
    foreignField: "_id",
    justOne: true
});

const TaskModel = mongoose.model("TaskModel", TaskSchema , "tasks");

module.exports = TaskModel;