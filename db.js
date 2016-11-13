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

var postBlog = sequelize.define('blogs', {
  id:{type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  title:Sequelize.STRING,
  msg:Sequelize.TEXT,
  createDate:Sequelize.DATE
});

sequelize.sync();


app.use(
  bodyParser.urlencoded({extended:true })
);

app.get('/blog', function (req, res){
	sequelize.sync().then(function(){
  postBlog.findAll({
    attributes:['title', 'msg'],
    // where:{
    //   id:1
    // }
    }).then(function(messages){
      for(var i = 0; i < messages.length; i++){ 
        var postToBlog=[];
        postToBlog.push(messages[i].dataValues);
      }
      console.log(postToBlog);
     console.log(postToBlog.length);
      res.render('blog', {blog:postToBlog});
    }); 
});
//Executing (default): SELECT `id`, `title`, `msg`, `createDate`, `createdAt`, `up
//datedAt` FROM `blogs` AS `blog`;
//

// sequelize.query("SELECT title FROM `blogs`", { type: sequelize.QueryTypes.SELECT})
//     .then(function(dbtitle) {
//      console.log(dbtitle.dataValues);
//     });

  // sequelize.query("SELECT msg FROM `blog`", { type: sequelize.QueryTypes.SELECT})
  // .then(function(dbMsg) {
  //   // We don't need spread here, since only the results will be returned for select queries
  // })
  // var myQuery={
  // 	title:dbtitle,
  // 	msg:dbMsg
  // }

// messages=[ { dataValues: { title: 'New blog title', msg: 'SOme new enttry' },
//     _previousDataValues: { title: 'New blog title', msg: 'SOme new enttry' },
//     _changed: {},
//     '$modelOptions':
//      { timestamps: true,
//        instanceMethods: {},
//        classMethods: {},
//        validate: {},
//        freezeTableName: false,
//        underscored: false,
//        underscoredAll: false,
//        paranoid: false,
//        rejectOnEmpty: false,
//        whereCollection: [Object],
//        schema: null,
//        schemaDelimiter: '',
//        defaultScope: {},
//        scopes: [],
//        hooks: {},
//        indexes: [],
//        name: [Object],
//        omitNul: false,
//        sequelize: [Object],
//        uniqueKeys: {},
//        hasPrimaryKeys: true },
//     '$options':
//      { isNewRecord: false,
//        '$schema': null,
//        '$schemaDelimiter': '',
//        raw: true,
//        attributes: [Object] },
//     hasPrimaryKeys: true,
//     __eagerlyLoadedAssociations: [],
//     isNewRecord: false } ]
  
 

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