const express = require('express');
const app = express();
const router = express.Router();
const fs = require("fs")
let userJson = require("./user.json")
const path = require("path");
const { response } = require('express');

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.use(express.urlencoded())
router.get('/home', (req,res) => {
  //res.send('This is home router');
  res.sendFile(path.join(__dirname + "/home.html"));
});

/*
- Return all details from user.json file to client as JSON format
*/
app.use(express.json())
router.get('/profile', (req,res) => {
  //res.send('This is profile router');
  //res.json({userJson})

  const filePath = path.join(__dirname, "user.json");
  let data = fs.readFileSync(filePath);
  data = JSON.parse(data);
  res.json(data);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  //res.send('This is login router');
  const {username, password} = req.query;

  const pathWay = path.join(__dirname, "user.json");
  const data = fs.readFileSync(pathWay);
  const user = JSON.parse(data);

  let response;

  if(user.username == username){
    if(user.password == password){
      response = {status: true, message: "User Is Valid"};
    }
    else{
      response = {status: false, message: "Password is invalid"};
    }
  }
  else{
    response = {status: false, message: "User Name is invalid"};
  }

  res.json(response);
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  //res.send('This is logout router');

  const username = req.params.username;
  res.send(`<b>${username} successfully logout.<b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));