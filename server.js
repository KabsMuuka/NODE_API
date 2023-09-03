const dotenv = require('dotenv');
dotenv.config();
const {mongoose} = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const studentsRoutes = require('./routes/studentsRoutes')


app.use(express.json());

app.use("/api/studentsdetails",studentsRoutes)

function ConnectToDB(){
    try {
    mongoose.connect('mongodb://127.0.0.1:27017',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    app.listen(port,()=>{
    console.log(`sever is running on port ${port}`);
    });
});
    } catch (error) {
        console.log(`Failed to connect to mongodb`);
    }
}
ConnectToDB();




