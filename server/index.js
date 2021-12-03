const X = require('express')
const APP = X()
const PORT = 1999
const PATH = require('path');

// APP.use(X.static(PATH.join(__dirname, '../public')));
APP.use('/studypointCalculator', X.static(PATH.join(__dirname, '../public/studypointCounter')));

APP.listen(PORT, () => {
    console.log(`Webshop running at http://localhost:${PORT}`)
})