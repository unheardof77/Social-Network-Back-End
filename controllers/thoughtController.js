const { Thought, User } = require('../models');


async function getAllThoughts(req, res){
    try{
        const thoughts = await Thought.find({});
        res.status(200).json(thoughts);
    }catch(err){
        res.status(500).json(err)
    }
};

async function getOneThought(req, res){

};

async function postNewThought(req, res){

};

async function putThought(req, res){

};

async function deleteThought(req, res){

};

async function postReaction(req, res){

};

async function deleteReaction(req, res){

};



module.exports = {
    thoughtFunctions:{
        getAllThoughts,
        getOneThought,
        postNewThought,
        putThought,
        deleteThought,
        postReaction,
        deleteReaction
    }
};