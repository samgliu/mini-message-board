var express = require('express');
var router = express.Router();

const messages = [
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
    res.render('new', {
        title: 'Mini Message Board',
        messages: messages,
    });
});

router.post('/new', function (req, res, next) {
    console.log(req.body);
    let message = req.body.message;
    let name = req.body.name;
    messages.push({
        text: message,
        user: name,
        added: new Date(),
    });
    res.redirect('/');
});

module.exports = router;
