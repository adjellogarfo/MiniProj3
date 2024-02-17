const express = require('express');
let router = express.Router();
const SponsorController = require('../controllers/sponsor.controller');
const {
    body,
    param
} = require('express-validator');
const AuthController = require("../controllers/auth.controller");

router.route('/')
.post([body('name').isString(),
    body('type').isString(),
    body('email').isString(),
    body('address').isString(),
    body('creation_date').isISO8601()
], SponsorController.create)
.get(AuthController.checkAuth, SponsorController.get);
   
router.route("/deactivate/:id")
    .put(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.deactivate);

router.route("/activate/:id")
    .put(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.activate);

router.route('/:id')
    .get(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.getOne)
    .put(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.update)
    .delete(AuthController.checkAuth, [param("id").isMongoId()], SponsorController.delete);

module.exports = router;