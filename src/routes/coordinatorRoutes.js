const { Router } = require('express');

const CoodinatorController = require('../controllers/CoordinatorController');

const CoordinatorMiddleware = require('../middlewares/CoordinatorMiddleware');

const coordinatorRouter = Router();

coordinatorRouter.post('/coordinator/proposals/:id/reviewers', CoordinatorMiddleware.checkLinkReviewerToProposal, CoodinatorController.linkProfessorsToProposal);

module.exports = coordinatorRouter;
