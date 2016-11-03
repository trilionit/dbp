var me = require("./countdown");

var prince = new me.person("Prince Osei-Akyeampong", 31);
console.log(prince.name + " is " + prince.age + " years old " + " and is retiring " + prince.retiringAt() + " years from now" );