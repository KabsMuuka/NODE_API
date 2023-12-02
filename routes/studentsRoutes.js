const express = require("express");
const router = express.Router();
const {getStudents,getPut,getPost,getDelete} = require("../controller/studentsController")

// CHANGE EVERYTHING TO POSTSQL ?????


router.get("/api",getStudents);

router.post("/add",getPost);

router.put("/:id",getPut);

// //deleting from the database!

// router.delete("/:id",getDelete);

module.exports = router;