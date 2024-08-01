const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
const port = 3000; // 서버 포트 번호

app.use(cors());
// 미들웨어 설정
app.use(bodyParser.json()); // JSON 요청 본문을 파싱합니다
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 요청 본문을 파싱합니다

// POST 요청을 처리할 엔드포인트 정의
app.post('/api/submit', (req, res) => {
    const { query, resultText } = req.body;

    // 받은 데이터 콘솔에 출력
    console.log('Search Query:', query);
    console.log('Result Text:', resultText);

    // 클라이언트에 응답
    res.json({
        status: 'success',
        message: 'Data received successfully',
        data: {
            query,
            resultText
        }
    });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
