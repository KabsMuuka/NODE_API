const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = 3000;
const studentsRoutes = require('./routes/studentsRoutes');
const errorMiddleWare = require('./middleWare/errorMiddleWare');

app.use(express.json());

app.use(errorMiddleWare);

app.use("/",studentsRoutes)


app.listen(port,()=>{
    console.log(`sever is running on port ${port}`);
    });



app.get('/',(req,res)=>{
   throw new Error("fake error")
});


