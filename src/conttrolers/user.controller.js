import{asyncHandler} from '../utils/asyncHandler.js'


const resgisterUser = asyncHandler(async(req,res,next)=>{
    res.status(200).json({
        success: true,
        message: 'Register User'
    })
})