const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../conn/conn');

//register student 

router.post('/studentData', function (req, res) {
    var post = {


        "name": req.body.name,
        "email": req.body.email,
        "idNo": req.body.idNo,
        "modules": req.body.modules


    };

    if (!post) {
        res.send({
            code: 400,
            message: "FALSE"
        })
    }

    var myQuery = "INSERT INTO studentInfo SET ?";
    db.query(myQuery, [post], function (err, results, fields) {
        if (err) {

            res.send({
                data: err,
                code: 400,
                message: "Account already exists!!!"
            });
        } else {
            var email = req.body.email
            db.query('select * from studentInfo where email = ?', email, function (err, results, fields) {


                return res.send(results)
            })
        }
    });

})
module.exports = router;