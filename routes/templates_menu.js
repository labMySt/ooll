var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        link: '/templates/all',
        label: 'Всі'
    }, {
        link: '/templates/new',
        label: 'Нові'
    }, {
        link: '/templates/popular',
        label: 'Популярні'
    }, {
        link: '/templates/favorites',
        label: 'Обрані'
    }]);
});

module.exports = router;