const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json({ status: 200, message: 'Api is working'});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;