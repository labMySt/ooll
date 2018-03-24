var express = require('express');
var router = express.Router();
var config = require('config');

/* GET users listing. */
router.get('/', function(req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    },  {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/hhh.png'
    }]);
});

module.exports = router;