const mongoose = require("mongoose");

const MemberSchema = mongoose.Schema({
    name: String,
    nickname: String,
    description: String
}, {versionKey: false});

const MemberModel = mongoose.model("MemberModel", MemberSchema, "members");

module.exports = MemberModel;