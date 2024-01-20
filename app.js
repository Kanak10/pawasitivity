const express = require("express")

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render("index")
})

app.get('/registration', function(req, res) {
    res.render('registration');
  });
  
  app.get('/login', function(req, res) {
    res.render('login');
  });

app.listen(3000, () => { console.log("Run on port 3000") })
