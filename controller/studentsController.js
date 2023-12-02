const connection = require('../db/database');

const getStudents = async(req, res) => {
    connection.query('SELECT * FROM StudentDetails', (error, result) =>{
    if (error) throw error;

    if (result.length > 0) {
        res.status(200).json(result)
    }else if(result.length === 0) {
        res.status(500).json({message : `Sorry the database table is empty!`});
    }
   });
};


const getPost = async(req,res)=>{
    try {
        const {fullName, studentSin } = req.body;

        const insertData = 'INSERT INTO StudentDetails(fullName, studentSin) VALUES(?, ?)';
        connection.query(insertData, [fullName, studentSin]);

        res.status(200).json({message : 'Student information Successfully added to table'});

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//router.put 
const getPut = async(req,res)=>{
    try {
    //get the dynamic 
    const {id} = req.params;

    const updateQuerry = 'UPDATE StudentDetails SET ? WHERE id = ?';

    //array of values to update
    const values = [req.body, id];
    
    const updatedResults =  connection.query(updateQuerry, values);

    if(updatedResults.affectedRows === 0){
        return res.status(404).json({message: `ID not found. id =/= ${id}`});
        
    }else{
         res.status(200).json({message: `Succesfully updated the rows of the ${id}`});
    }

    } catch (error) {
        console.log({message:error.message});
    }
};


module.exports = {
    getStudents,
    getPut,
    getPost,
}

