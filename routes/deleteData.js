const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

//delete student profile

router.delete('/delete/:id', function (req, res) {

    var sQL = 'DELETE FROM studentInfo WHERE id= ?';
    
    db.query(sQL, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully');
        else
            console.log(err);
    })
});

module.exports = router;