const studentModel = require("../models/studentsModel");
//router.get
const getStudents = async(req,res)=>{
    try {
        const getAllInfor = await studentModel.find({});
        res.status(200).json(getAllInfor);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
//router.put 
const getPut = async(req,res)=>{
    try {
    //get the dynamic 
    const {id} = req.params;
    //get the id of and clients req they want to edit!!
    const getId = await studentModel.findByIdAndUpdate(id,req.body);

    //whenever you are fetching from the database always use await
    const updatedDetails = await studentModel.findById(id);
    res.status(200).json(updatedDetails);

    if(!getId){
        return res.status(404).json({message: `ID not found with this id ${id}`});
    }
    
    } catch (error) {
        console.log({message:error.message});
    }
};

const getPost = async(req,res)=>{
    try {
        //req.body is the information coming from the client 
        const addStudentInfo = await studentModel.create(req.body);
        res.status(200).json(addStudentInfo);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};
const getDelete = async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteStudentInfor = await studentModel.findByIdAndDelete(id);
        const getAllInfor = await studentModel.find({});
        res.status(200).json(getAllInfor);

        if(!deleteStudentInfor){
            return res.status(404).json({message: 'ID not found'});
        }
    } catch (error) {
        console.log({message:error.message});
    }
};

module.exports = {
    getStudents,
    getPut,
    getPost,
    getDelete,
}

