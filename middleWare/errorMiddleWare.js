const errorMiddleWare = (error,req,res,next)=>{
    console.log("erroring from errorMiddleWare!");

    const statusCode = res.statusCode ? res.statusCode : 500; 
    res.status(statusCode);
    /*the below condition is a tenary condition, if NODE_ENV equals developement, 
     it should show error, otherwise null (production)*/
    res.json({message: error.message, stack: process.env.NODE_ENV === "development" ? error.stack : null })

};
module.exports = errorMiddleWare; 