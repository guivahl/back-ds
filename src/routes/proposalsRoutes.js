const { Router } = require('express');

const multer = require('multer');

const ProposalController = require('../controllers/ProposalController');

const proposalsRouter = Router();

const upload = multer({ dest: 'uploads/' });

proposalsRouter.post('/proposals', upload.single('file'), ProposalController.create);

module.exports = proposalsRouter;
