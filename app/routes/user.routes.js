
module.exports = app => {
  const user = require("../controllers/user.controller.js");
  const Role = require('../models/index').Role;
  const authorize = require('../middleware/authorize');
  var router = require("express").Router();

  router.post('/authenticate', user.authenticateSchema, user.authenticate);
  router.post('/refresh-token', user.refreshToken);
  router.post('/revoke-token', authorize(), user.revokeTokenSchema, user.revokeToken);
  router.post('/register', user.registerSchema, user.register);
  router.post('/verify-email', user.verifyEmailSchema, user.verifyEmail);
  router.post('/forgot-password', user.forgotPasswordSchema, user.forgotPassword);
  router.post('/validate-reset-token', user.validateResetTokenSchema, user.validateResetToken);
  router.post('/reset-password', user.resetPasswordSchema, user.resetPassword);
  router.get('/', authorize(Role.Admin), user.getAll);
  router.get('/:id', authorize(), user.getById);
  router.post('/', authorize(Role.Admin), user.createSchema, user.create);
  router.put('/:id', authorize(), user.updateSchema, user.update);
  router.delete('/:id', authorize(), user._delete);

  app.use('/api/user', router);
};




