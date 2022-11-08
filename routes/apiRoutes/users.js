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


router.route('/').get(getAllUser).post(postNewUser);
router.route('/:userId').get(getOneUser).put(putOneUser).delete(deleteOneUser);
router.route('/:userId/friends/:friendId').post(postNewFriend).delete(deleteFriend);

module.exports= router;