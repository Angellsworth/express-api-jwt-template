// controllers/test-jwt.js
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/sign-token', (req, res) => {
    const user = {
        _id: 1,
        username: 'test',
        password: 'test',
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRET)
    res.json({ token })
})

router.post('/verify-token', (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        res.json({ token, decoded }); 
        //I ADDED token just for fun to see both the token and the decoded token 
    } catch (error) {
        res.status(401).json({ err: 'Invalid token.' });
    }
  });

module.exports = router;