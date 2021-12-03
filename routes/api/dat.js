const express = require('express');
const router = express.Router();
const Database = require('../../DBconfig/Database');

router.post('/print', async (req, res) => {
    let database = new Database(false);

    database.nameret(2, results => {
        //  console.log(' Order ID Server : ' + results.valid);
        console.log(" Data from Client " + results[0].fname + " : " + req.body.Custdata[0].OI)
        res.json(results);
    })
});

router.get('/print1', async (req, res) => {
    let database = new Database(false);
    console.log(' print1: abncnd ' );
    database.nameret(2, results => {
        //  console.log(' Order ID Server : ' + results.valid);
        console.log(" Data from Client : " + results[0].fname )
        res.json(results);
    })
});

module.exports = router;