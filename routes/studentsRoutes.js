const express = require("express");
const router = express.Router();
//importing model
const studentModel = require("../models/studentsModel");
//importing studentContoller
const {getStudents,getPut,getPost,getDelete} = require("../controller/studentsController")



//routes

//getting all infor
router.get("/",getStudents);

//adding to database
router.post("/",getPost);

//Editing the database!

router.put("/:id",getPut);

//deleting from the database!

router.delete("/:id",getDelete);

module.exports = router;