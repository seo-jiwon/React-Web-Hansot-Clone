const express = require("express");
const router = express.Router();
const database = require("../database");

router.get('/menu', (req,res) => {
    database.query('SELECT m_id, l_category, s_category, m_name, FORMAT(m_price, 0) m_price FROM menu', (err, result) => {
        if(err) res.send(err);
        else{
            res.send(result);
            console.log("게시글 목록 조회");
            console.log(result);
        }
    })
})
        
module.exports = router;