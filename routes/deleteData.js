const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//delete student profile

router.delete('/deleteData', function (req, res) {

    const idNo = req.body.idNo;

    //var myQuery = "DELETE * FROM studentInfo";


    //db.query(myQuery, [idNo], function (err, results) {
        db.query('DELETE * FROM studentInfo WHERE idNo=?', [req.params.idNo], (err, rows, fields) => {
        if (err) {

            res.send({
                code: 400,
                message: err
            })
        } else {


            res.send({
                code: 200,
                message: "DELETED Successfully!"

            })
        }
    })
});

module.exports = router;