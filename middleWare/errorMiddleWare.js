const errorMiddleWare = (error,req,res,next)=>{
    console.log("erroring from error MiddleWare!");

    res.json({message:error.message})

};
module.exports = errorMiddleWare;