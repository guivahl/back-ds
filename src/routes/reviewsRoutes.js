const { Router } = require('express');
const ReviewsController = require('../controllers/ReviewsController');

const Authentication = require('../middlewares/Authentication');

const ProposalMiddleware = require('../middlewares/ProposalMiddleware');

const reviewsRouter = Router();

reviewsRouter.get('/reviews/:id', Authentication.checkIfUserIsProfessor, ReviewsController.getOne);
reviewsRouter.put('/reviews/:id', Authentication.checkIfUserIsProfessor, ReviewsController.update);

reviewsRouter.post('/proposals/:id/reviews', ProposalMiddleware.checkSubmitProposalPossibility, ReviewsController.update);

module.exports = reviewsRouter;
