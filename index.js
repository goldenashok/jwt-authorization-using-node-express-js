const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();

app.use(express.json())

const postData = [
    {
        user: 'ashok',
        name: 'Ashok kumar'
    },
    {
        user: 'ajay',
        name: 'Ajay'
    }
];

function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[0];
        jwt.verify(bearerToken, 'my_secretkey', (err, user) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.user = user;
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
}

app.get('/api', (req, res) => {
    res.json({
        text: 'test api'
    })
});

app.post('/api/login', (req, res) => {
    const user = req.body.username;
    const token = jwt.sign(user, process.env.ACCESSTOKEN);
    res.json({
        token: token
    })
});

app.get('api/producted', ensureToken, (req, res) => {
    res.json({
        user: postData.filter(item => item.name === req.body.username)
    })
});


app.listen('4000', () => {
    console.log(`http://localhost:4000`);
});
