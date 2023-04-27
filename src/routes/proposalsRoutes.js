const { Router } = require('express');

const multer = require('multer');

const ProposalController = require('../controllers/ProposalController');

const proposalsRouter = Router();

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
const upload = multer({ storage });

proposalsRouter.post('/proposals', upload.single('file'), ProposalController.create);

module.exports = proposalsRouter;
