const router = require('express').Router();
const {
    getAllUser,
    getOneUser,
    postNewUser,
    putOneUser,
    deleteOneUser,
    postNewFriend,
    deleteFriend
} = require('../../controllers').userFunctions;


router.route('/').get(getAllUser).post();
router.route('/:userId').get(getOneUser).put().delete();
router.route('/:userId/friends/:friendId').post().delete();

module.exports= router;