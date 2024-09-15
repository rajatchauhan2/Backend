// Purpose: Define a custom error class to handle API errors.

class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data =null;
        this.message = message;
        this.errors = errors; 
        this.succes = false;

        if(stack){
            this.stack = stack;
             
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError}