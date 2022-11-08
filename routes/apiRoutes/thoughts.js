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

router.route('/').get(getAllThoughts).post()
router.route('/:id').get().put().delete();
router.route('/:thoughtId/reactions').post().delete();


module.exports= router;