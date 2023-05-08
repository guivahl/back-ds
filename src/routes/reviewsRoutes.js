const { Router } = require('express');
const ReviewsController = require('../controllers/ReviewsController');

const Authentication = require('../middlewares/Authentication');

const reviewsRouter = Router();

reviewsRouter.get('/reviews/:id', Authentication.checkIfUserIsProfessor, ReviewsController.getOne);
reviewsRouter.put('/reviews/:id', Authentication.checkIfUserIsProfessor, ReviewsController.update);

module.exports = reviewsRouter;
