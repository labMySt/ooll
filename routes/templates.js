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
        img: config.get('Img.img_server') + './templates/AD12.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD2.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD3.png'
    },  {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD4.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD5.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD6.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD7.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD8.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD9.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD10.png'
    },  {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD11.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD12.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD13.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD14.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD15.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD16.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD17.png'
    },  {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD18.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD19.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD20.png'
    },{
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD21.png'
    },{
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD22.png'
    },{
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD23.png'
    }, {
        link: '/templates',
        label: 'Віща школа у Британії',
        img: config.get('Img.img_server') + './templates/AD24.png'
    }]);
});

module.exports = router;