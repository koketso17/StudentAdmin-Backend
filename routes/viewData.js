const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//get student profile

router.get('/view', function (req, res) {

    const idNo = req.body.idNo;

    var myQuery = "SELECT * FROM studentInfo  WHERE idNo=?";


    db.query(myQuery, [idNo], function (err, results) {
        if (err) {

            res.send({
                code: 400,
                message: err
            })
        } else {


            res.send({
                results

            })
        }
    })
});

module.exports = router;