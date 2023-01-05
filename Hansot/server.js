const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

// 미들웨어 추가
app.use(cors());

app.get('/', function(req, res) {
    res.end("<h1>root</h1>")
})

// 라우트(route) 설정
const server = http.createServer(app);
server.listen(3000, function() {
    console.log('서버 실행 중 : http://localhost:3000');
});