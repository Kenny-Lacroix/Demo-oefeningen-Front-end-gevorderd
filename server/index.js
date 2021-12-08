const X = require('express');
const PATH = require('path');
const APP = X();
const PORT = 1999;

const messages = [];

APP.use('/studypointCalculator', X.static(PATH.join(__dirname, '../public/studypointCounter')));
APP.use('/car', X.static(PATH.join(__dirname, '../public/carClass')));
APP.use('/chat', X.static(PATH.join(__dirname, '../public/chatServer')));

APP.use(X.json());

APP.get('/api/messages', (req, res) => {
    return res.send(JSON.stringify(messages));
});

APP.post('/api/message', (req, res) => {
    const { message } = req.body;
    messages.push(message);
    return res.send({ "status": "OK" });
});

APP.listen(PORT, () => {
    console.log(`Webshop running at http://localhost:${PORT}`)
});