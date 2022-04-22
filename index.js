const express = require('express');
const db = require('./libs/mongoose');
const app = express();
const port = 3000;
const apiRouter = require('./routes/index');
//database
db();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('hello');
});

apiRouter(app);

app.listen(port, () => {
  console.log('server in ' + port);
});
