const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = require('../conn/conn');

//Udate profile
router.put('/update', (req, res) => {

    let student = req.body;
    var sql = "SET @id = ?;SET @name = ?;SET @email = ?;SET @idNo = ?;SET @modules = ?;SET @dateMod = ?;\
    CALL modifyData(@id,@name,@email,@idNo,@modules,@dateMod);";

    db.query(sql, [student.id, student.name, student.email, student.idNo, student.modules, student.dateMod], (err, rows, fields) => {
        if (!err)
            res.send('Updated...');
        else
            console.log(err);
    })

});
module.exports = router;