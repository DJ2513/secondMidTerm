const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
let current_id = 1
const url = `https://www.superheroapi.com/api.php/5590503564398104/`;
const bodyParser = require("body-parser");
const port = 8000;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.static(path.join(__dirname, 'css')));
app.use(bodyParser.urlencoded())

app.get("/",(req,res)=>{
    console.log(`${url}${current_id}`)
    request(`${url}${current_id}` , (err, response, body)=>{
    if (!err){
        const users = JSON.parse(body);
        res.render(__dirname + "/index.html", {data:users});
    }
  });
});
    
app.get('/next', function(req, res) {
    if (current_id == 732){
        current_id = 1;
    }
    else{
        current_id += 1
    }
    res.redirect('/')
});


app.get('/previous', function(req, res) {
  if (current_id == 1 ){
    current_id = 732;
  }else{
    current_id-= 1
  }
  res.redirect('/')
});

app.post("/",(req,res)=>{
  let nameurl = `https://www.superheroapi.com/api.php/5590503564398104/search/${req.body.nombre}`
  request(nameurl , (err, response, body)=>{
    if (!err){
      const users = JSON.parse(body);
      if (users['response'] === 'success') {
        current_id = parseInt(users['results'][0]['id'])
        console.log(current_id)
        res.render(__dirname + "/index.html", {data:users['results'][0]});
      }
      else {
        res.render(__dirname + "/error.html");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port 8000`)
})
