const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Привет, мир! Это моя первая веб-страница на Azure.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
