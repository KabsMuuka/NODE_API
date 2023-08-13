const express = require('express');
const app = express();
const port = 3000;

const {mongoose} = require("mongoose");

//connect to mongodb
const {MongoClient} = require("mongodb");

//importing todos from todosModels
const todos = require("./models/todosModel");

//importing studentModel
const students = require("./models/studentsModel");

app.use(express.json());

// 
// 
//

const uri = "mongodb://127.0.0.1:27017";

mongoose.connect("mongodb://127.0.0.1:27017").then(()=>{
    app.listen(port,()=>{
        console.log(`sever is running on port ${port}`);
    });
});
async function connectToDatabase(){
    //client
    const client = new MongoClient(uri);

    try{
    //call the connect method
    await client.connect();

    //connect to db todoList using client 
    const db = await client.db("test");

    //get the collections

    const studetsInfor = await db.collection("studentsdetails");

    const result = await studetsInfor.find().toArray();



    //erasing myTodos

    //const deleting = await myTodos.deleteMany({id:"id3"},{id:"id4"},{id:"id5"});

   // const deleting = await myTodos.deleteMany({id:"id4"},{id:"id5"});
    //updating mytodos

  /*const Newtodo = myTodos.insertMany([
    {title:"I now know how to connect to the server",id:"id3"},
    {title:"My next task to implement my todos from a webpage to mongodb directly!",id:"id4"},
    {title:"And finally guide me Lord",id:"id5"}
    ]);
    console.log(Newtodo.insertedCount)*/

  //  console.table(result)


    }catch(e){
        console.log(`Failed to connect to the database! ${e}`);
    }

    finally{
    }
}
connectToDatabase();

//routes

//GET retrieve or fetch data from the server. Requested by the client: webbroswer

// "/mytodos" refers to the collection model (table) in the database!
app.get("/mytodos",async(req,res)=>{
    try {
        const getAllToods = await todos.find({});
        res.status(200).json(getAllToods);

    } catch (error) {
        res.send(500).json({message:error.message});
    }
    
});

//Geting a specific todo

//inorder to use await, the function needs to be wrapped in a async()
app.get("/mytodos/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const GetaSpecificTodoById = await todos.findById(id);
        res.status(200).json(GetaSpecificTodoById);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

//POST :send data to the server for processing or modification

// "/mytodos" refers to the collection model (table) in the database!
app.post("/mytodos",async (req,res)=>{
    try {
    const newTodos = await todos.create(req.body);
    res.status(200).json(newTodos);

    /*You can either use res.status(200).json(newTodos); or res.send(req.body);

    The purpose is to send a response back to the client 
    after successfully adding student information to the database.
    You can choose one of these approaches based on your desired response format.

    */
    //res.send(req.body);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});


//FOR STUDENT MODEL
app.post("/studentsDetails",async(req,res)=>{
    try {
        //req.body is the information coming from the client 
        const addStudentInfo = await students.create(req.body);
        res.status(200).json(addStudentInfo);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
});



//Editing the database! use app.put

app.put("/studentsDetails/:id",async(req,res)=>{
    try {
    //get the dynamic 
    const {id} = req.params;
    //get the id of and clients req they want to edit!!
    const getId = await students.findByIdAndUpdate(id,req.body);

    //whenever you are fetching from the database always use await
    const updatedDetails = await students.findById(id);
    res.status(200).json(updatedDetails);

    if(!getId){
        return res.status(404).json({message: `ID not found with this id ${id}`});
    }
    
    } catch (error) {
        console.log({message:error.message});
    }
});

//deleting from the database!

app.delete("/studentsDetails/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteStudentInfor = await students.findByIdAndDelete(id);
        const getAllInfor = await students.find({});
        res.status(200).json(getAllInfor);

        if(!deleteStudentInfor){
            return res.status(404).json({message: 'ID not found'});
        }
    } catch (error) {
        console.log({message:error.message});
    }
});
