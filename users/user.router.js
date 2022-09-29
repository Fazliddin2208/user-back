const express = require("express");
const router = express.Router();
const controller = require('./user.controller')


router.route('/').get(controller.getUsers)
router.route('/').post(controller.addUsers)
router.route('/:id').delete(controller.deleteUser)
router.route('/:id').put(controller.updateUsers)
router.route('/:userId').put(controller.updateStatus)


// yangi qoshilgan functionlar so'rovlari
// router.route("/kel/:id").put(usersController.changePupils);

// router.route("/check/:id").put(usersController.checkPupils);

module.exports = router;
