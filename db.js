var express =require("express");
var app = express();
var port = 2121;
var bodyParser = require("body-parser");
var Sequelize = require("Sequelize");

app.set("view engine", "ejs");
app.use(express.static("public"));

var sequelize = new Sequelize('myblog', 'root', null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './myblog.db'
});

var postBlog = sequelize.define('blog', {
  id:{type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  title:Sequelize.STRING,
  msg:Sequelize.TEXT,
  createDate:Sequelize.DATE
});
sequelize.sync({force: true});


app.use(
  bodyParser.urlencoded({extended:true })
);

app.get('/blog', function (req, res){
	
	sequelize.query("SELECT title FROM `blog`", { type: sequelize.QueryTypes.SELECT})
	.then(function(dbtitle) {
  	console.log(dbtitle);
    
  });

  // sequelize.query("SELECT msg FROM `blog`", { type: sequelize.QueryTypes.SELECT})
  // .then(function(dbMsg) {
  //   // We don't need spread here, since only the results will be returned for select queries
  // })
  // var myQuery={
  // 	title:dbtitle,
  // 	msg:dbMsg
  // }
  console.log("blog website started");
  res.render('index');

  });

app.get('/category/:posts', function (req, res){
	var page = req.params.posts;
  console.log("blog website started");
  res.render(page);
});

app.post('/send', function(req, res){
   if (!req.body) return res.sendStatus(400);
  //form submission from blog form
  sequelize.sync().then(function(){
  postBlog.create({
    title:req.body.title,
    msg:req.body.message,
    createDate:new Date()
  });
  // var blog={};
  // blog ={
  //   title:req.body.title,
  //   msg:req.body.message
  // }
});

  res.redirect('/posts');
});

app.get('/posts', function (req, res){
res.render('index');

});


app.listen(port, function(){
var getTimeStamp = new Date();
console.log('Server Started');
});