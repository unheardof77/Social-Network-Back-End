const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    postNewThought,
    putThought,
    deleteThought,
    postReaction,
    deleteReaction
} = require('../../controllers').thoughtFunctions;

router.route('/').get(getAllThoughts);
router.route('/:id').get(getOneThought).put(putThought).delete(deleteThought).post(postNewThought);
router.route('/:thoughtId/reactions').post(postReaction).delete(deleteReaction);


module.exports= router;