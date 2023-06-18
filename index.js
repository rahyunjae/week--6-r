const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const { User } = require("./models/User");
const bodyParser = require("body-parser");
const config = require('./config/key');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('새해 복 많이 받으세요!');
});

app.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({
      success: true
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});