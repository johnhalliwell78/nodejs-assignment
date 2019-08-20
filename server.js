const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const initRoutes = require('./routes/web');


app.use(bodyParser.json());

initRoutes(app);

let port = 8017;
app.listen(port, "localhost", () => {
    console.log('Running at port 8017...');
});