const express = require("express");
const router = express.Router();
const database = require("../database");

router.post("/signup", (req, res) => {
    database.query(
        "INSERT INTO user(id, pwd, email, phone) values (?, ?, ?, ?)", [req.body.id, req.body.pwd, req.body.email, req.body.phone],
    function(err, data){
        if(err){
            console.log(err);
            console.log("회원가입 실패")
        } else{
            res.send({success : 1});
            console.log("회원가입 성공")
        }
    });
});

// router.post("/signin", (req, res) =>{
//     const email = req.body.email;
//     const pw = req.body.pw;

//     database.query("select * from users where email = ? and pw = ?", [email, pw],
//     function(err, data, fields){
//         if(!data[0]){
//             console.log("로그인 실패, 일치하는 데이터 없음");
//             res.send({failure : 1});
//         }
//         else if(err){
//             console.log("에러 발생" + err);
//         }
//         else {
//             console.log("로그인 성공")
//             res.send({success : 1});
//         }
//     });
// });

        
module.exports = router;