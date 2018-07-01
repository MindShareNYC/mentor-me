const testsRouter = require('express').Router();
const testsControllers = require('./controllers/tests');

// router.get('/tests', testsControllers.getAllTests);
router.get('/tests', testsControllers.getAllTests);

// router.get('/tests/:testId', testsControllers.testSearch);
router.get('/tests/:testId', testsControllers.testSearch);


module.exports = testsRouter;