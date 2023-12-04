const express = require("express");
const router = express.Router();
const {getStudents, InsertToTable, UpdateTable, searchTable} = require("../controller/studentsController")

// CHANGE EVERYTHING TO POSTSQL ?????


router.get("/api",getStudents);

router.get("/:id",searchTable);

router.post("/add",InsertToTable);

router.put("/:id",UpdateTable);

// //deleting from the database!

// router.delete("/:id",getDelete);

module.exports = router;