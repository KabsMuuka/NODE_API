const mongoose = require("mongoose");

//schema that that gives a structure of how studentModel should contain

const studentSchema = mongoose.Schema({

    first_name:{
        type: String,
            require: true,
    },
    last_name:{
        type: String,
            require: true,
    },
    studentiD: {
        type: String,
            require: true,
        },
    programOfStudy: {
        type: String,
            require: true,
    },
    numberOfCourses: {
        type: Number,
            require: true,
    },
});
const students = mongoose.model("studentsDetails",studentSchema);

module.exports = students;