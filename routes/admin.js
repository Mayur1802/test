var express =  require("express");
var adminRouter = express();

adminRouter.get("/", (request, response)=>
{
    response.send("This is Admin Page");
});

adminRouter.get("/:Aid", (request, response)=>
{
    response.send("You searched for Admin id " + request.params.Aid);
});

module.exports = adminRouter;
