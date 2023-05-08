const { Router } = require('express');

const CoodinatorController = require('../controllers/CoordinatorController');

const coordinatorRouter = Router();

coordinatorRouter.post('/coordinator/proposals/:id/reviewers', CoodinatorController.linkProfessorsToProposal);

module.exports = coordinatorRouter;
