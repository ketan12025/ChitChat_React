let User = require('./../models/userModel').User
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const fs = require("fs")

module.exports.createUser = catchAsync(async(req,res,next)=>{
    await User.push(req.body.newUser)
    fs.writeFile(User,req.body.newUser,(er)=>{
        console.log('file written')
    })

    res.status(201).json({
        status:'success',
        data:{
           message:"user created"
        }
    })
   
})
module.exports.getAllUsers = catchAsync(async(req,res,next)=>{
    const allUser = await User.find();
    if(!allUser){
       return next(new AppError('no user xist','400'))
    }
    res.status(200).json({
        status:'success',
        result : allUser.length,
        data:{
            allUser
        }
    })
})
exports.getMe = (req,res,next)=>{
    req.params.id = req.user.id;
    next();
}
module.exports.getUser = catchAsync(async(req,res,next)=>{
    const user = await User.find({id:req.params.id});
    if(!user){
       return next(new AppError('no user exist with this id','400'))
    }
    res.status(200).json({
        status:'success',
       
        data:{
           user:user
        }
    })
})
module.exports.deleteUser = catchAsync(async(req,res,next)=>{
    const deletedUser = await User.findByIdAndDelete(req.params.id)

    if(!deletedUser){
        return next(new AppError("user wit this id does not exist",400))
    }
    res.status(200).json({
        status:'success',
        message:'USer is deleted successfully'
    })
})