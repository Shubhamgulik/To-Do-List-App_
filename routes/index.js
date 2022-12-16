const express = require('express');
const homeController = require('../controllers/home_controller');
const router = express.Router();


console.log('router loaded...');
router.get('/',homeController.home);

// For any other routes, access from here
// router.use('/routerName',require(./routerFile));
// router.use('/users',require('./users'));
// router.use('/posts',require('./posts'));

router.post('/add-task/',homeController.addTask);

module.exports = router;