const { User, Thought } = require('../models');


async function getAllUser(req, res){
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
}

async function getOneUser(req, res){
    try{
        const user = await User.findOne({_id: req.params.userId});
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }
}

async function postNewUser(req, res){
    try{
        const users = await User.create(req.body);
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
}

async function putOneUser(req, res){
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
}

async function deleteOneUser(req, res){
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
}

async function postNewFriend(req, res){
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
}

async function deleteFriend(req, res){
    try{
        const users = await User.find({});
        res.status(200).json(users);
    }catch(err){
        res.status(500).json(err)
    }
}




module.exports = {
    userFunctions:{
        getAllUser,
        getOneUser,
        postNewUser,
        putOneUser,
        deleteOneUser,
        postNewFriend,
        deleteFriend
    }
};