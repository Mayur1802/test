var express =  require("express");
var router =  express();
var mysql = require("mysql");
var Joi = require("joi");
var config = require("config");

var connection =  mysql.createConnection({
    host: config.get("host"),
    database:config.get("database"),
    user : config.get("user"),
    password:config.get("password")
});
connection.connect();
router.use(express.json());

router.get("/",(request, response)=>{
    var queryText = "select * from ElectionTb";
    
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});

router.get("/:no",(request, response)=>{
    var queryText = `select * from ElectionTb where id = ${request.params.id}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});


router.put("/:id",(request, response)=>{
    var id = request.params.id;
    var State = request.body.State;
    var Party = request.body.Party;

    var queryText = `update Election set State='${State}', Party= '${Party}' where id=${id}`;
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});



module.exports = router;



