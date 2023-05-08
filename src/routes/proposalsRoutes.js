const { Router } = require('express');

const multer = require('multer');

const ProposalController = require('../controllers/ProposalController');

const ProposalMiddleware = require('../middlewares/ProposalMiddleware');

const proposalsRouter = Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'uploads/');
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage });

proposalsRouter.post('/proposals', ProposalMiddleware.checkSubmitProposalPossibility, upload.single('file'), ProposalController.create);

module.exports = proposalsRouter;
