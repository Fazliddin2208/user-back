const express=require('express')
const router=express.Router()

const userRouter=require('./users/user.router')

router.use('/', userRouter)

module.exports=router