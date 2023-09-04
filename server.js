const dotenv = require('dotenv');
dotenv.config();
const {mongoose} = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const studentsRoutes = require('./routes/studentsRoutes');
const errorMiddleWare = require('./middleWare/errorMiddleWare');

app.use(express.json());

app.use("/api/studentsdetails",studentsRoutes)

//using error middle
app.use(errorMiddleWare);


function ConnectToDB(){
    mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
    app.listen(port,()=>{
    console.log(`sever is running on port ${port}`);
    });
});

}
ConnectToDB();

app.get('/',(req,res)=>{
   throw new Error("fake error")
})


