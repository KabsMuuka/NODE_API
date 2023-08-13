const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

/*database schema that defines the organization of data 
within the database model*/


//todosModel
const todosSchema = mongoose.Schema({
    title: 
    {
      type: String,
        require: [true,"add title of the todo"],
    },
    
    time:
    {
        type: String,
        require: [true,"add time"],
    },

    location: 
    { 
        type: String,
        require: [true,"add location"],
    },

    id: 
    {
    type: Number, 
     require: true 
    } 
});
 //timestamp

const todos = mongoose.model("mytodos",todosSchema);

module.exports = todos;