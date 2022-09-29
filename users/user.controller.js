const UsersModel=require('./user.model')
const fs = require('fs');
const path = require('path');

async function getUsers(req,res) {
    try{
        const users=await UsersModel.find({})
        return res.status(200).send(users)
    }catch(err){
        res.status(400).send(err)
    }
}


async function addUsers(req,res) {
    try{
        const category = new UsersModel({
          name:req.body.name,
          email:req.body.email,
          login:req.body.login,
          password: req.body.password,
          lastLoginTime:req.body.lastLoginTime,
          regTime:req.body.regTime
        })
      
        category.save((err, category) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    errors: err.meesage
                })
            }
            return res.json({
                message: "Created user successfully",
                category
            })
        })
    }catch(err){
        res.status(400).send(err)
    }
}

async function updateUsers(req,res) {
    try{
        let userId=req.params.id
        
        let result=await UsersModel.findByIdAndUpdate(userId,req.body)
      
        return res.status(200).send(result)
    }catch(err){
        res.status(404).send(err)
    }
}

async function updateStatus(req,res) {
    try{
        let userId=req.params.userId
        
        let result=await UsersModel.findByIdAndUpdate(userId,req.body)
        return res.status(200).send(result)
    }catch(err){
        res.status(404).send(err)
    }
}

async function deleteUser(req,res) {
    try{
        let userId=req.params.id
        
        let result=await UsersModel.findByIdAndDelete(userId)

        return res.status(200).send(result)
    }catch(err){
        res.status(400).send(err)
    }
}



// async function checkUser(req, res) {
//   try {
//     let userId = req.params.id;
//     let del = await PupilsModel.findOne({ _id: userId });
//     return res.status(200).send(del);
//     // }
//   } catch (err) {
//     res.status(404).send(err);
//   }
// }


// date o'zgartirish uchun
// async function changeUser(req, res) {
//   try {
//     let userId = req.params.id;

//     console.log(req.body);
//     const result = await PupilsModel.findByIdAndUpdate(userId, req.body);
//     return res.status(200).send(result);
//   } catch (err) {
//     res.status(404).send(err);
//     console.log(err);
//   }
// }

module.exports = {
  getUsers,
  addUsers,
  updateUsers,
  deleteUser,
  updateStatus,
  //checkUser,
  //changeUser,
};