const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get ('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("Kukkuu!!");
});

router.use(function (request,response,next){
  console.log("Middleware1");
next();
});

router.get ('/toka',function(request,response)
{
  response.send("Olen toinen");
  console.log("Toinen");
});

router.use(function (request,response,next){
  console.log("Middleware2");
next();
});

router.get ('/kolmas/:nimi',function(request,response)
{
  response.send("Kolmas, olen "+request.params.nimi);
  console.log(request.params.nimi);
});

router.use(function (request,response,next){
  console.log("Middleware3");
next();
});

router.get ('/neljas/:enimi/:snimi',function(request,response)
{
  response.send("Neljäs, olen "+request.params.enimi+" "+request.params.snimi);
  //console.log(reques.params.nimi);
});

router.post('/',function(request,response)
{
  response.send(request.body);
  console.log(request.body);
});
module.exports = router;
