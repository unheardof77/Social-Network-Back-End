const { Thought, User } = require('../models');


async function getAllThoughts(req, res){
    try{
        const thoughts = await Thought.find({});
        res.status(200).json(thoughts);
    }catch(err){
        res.status(500).json(err)
    };
};

async function getOneThought(req, res){
    try{
        const thought = await Thought.findOne({_id: req.params.id});
        res.status(200).json(thought);
    }catch(err){
        res.status(500).json(err)
    };
};

async function postNewThought(req, res){
    try{
        const newThought = await Thought.create(req.body);
        res.status(200).json(newThought);
    }catch(err){
        res.status(500).json(err);
    };
};

async function putThought(req, res){
    try{
        const updatedThought = await Thought.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        res.status(200).json(updatedThought);
    }catch(err){
        res.status(500).json(err);
    };
};

async function deleteThought(req, res){
    try{
        const deletedThought = await Thought.findOneAndDelete({_id: req.params.id});
        res.status(200).json(deletedThought);
    }catch(err){
        res.status(500).json(err);
    };
};

async function postReaction(req, res){
    try{
        const reaction = await Thought.findOneAndUpdate({_id: req.params.id}, {$addToSet:{reactions: req.body}}, {new: true});
        res.status(200).json(reaction);
    }catch(err){
        res.status(500).json(err);
    };
};

async function deleteReaction(req, res){
    try{
        const deletedReaction = await Thought.findOneAndUpdate({_id: req.params.id}, {$pull:{reactions: req.body}}, {new: true});
        res.status(200).json(deletedReaction);
    }catch(err){
        res.status(500).json(err);
    };
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