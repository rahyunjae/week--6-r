const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const {User} = require("./modls/User")
const bodyParser = require("body-parser")



//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());




mongoose.connect('mongodb+srv://rahyun:112288ra@cluster0.ip2razi.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/register', (req, res) => {

  const user = new User(req.body) // req.body로 유저 정보를 가져오는 것 -> DB에 넣어야 한다.
  //model 틀에 body -> 물을 얼음통에 넣음 -> 동그란 얼음: 물 body, 얼음통 User, 동그란 얼음 user
  
  user.save((err,userInfo)=>{
    if(err) return res.json({success:false,err})
    return res.status(200).json({
      success:true
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})