var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        class: 'nav-item',
        link: '/templates',
        label: 'Шаблони'
    }, {
        class: 'nav-item',
        link: '/contacts',
        label: 'Контакти'
    }, {
        class: 'nav-item',
        link: '/help',
        label: 'Допомога'
    }, {
        class: 'nav-item',
        link: '/sign_up',
        label: 'Вхід'
    }]);
});

module.exports = router;