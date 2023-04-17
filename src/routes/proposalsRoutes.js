const { Router } = require('express');

const ProposalController = require('../controllers/ProposalController');

const proposalsRouter = Router();

proposalsRouter.post('/proposals', ProposalController.create);

module.exports = proposalsRouter;
