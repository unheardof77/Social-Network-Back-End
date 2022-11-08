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

router.route('/').get(getAllThoughts).post(postNewThought)
router.route('/:id').get(getOneThought).put(putThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(postReaction).delete(deleteReaction);


module.exports= router;