'use strict'

var moment = require('moment');
module.exports=function(app){
    
   app.get('/:query', function(req,res) {
  var myDate=req.params.query;
  myDate = moment(req.params.query, "MMMM DD, YYYY");
  
  if( !myDate.isValid()) {
       res.json({
      "unix": null,
      "normal": null
    });
    } 


  if(myDate.isValid()) {
    res.json({
      "unix": myDate.format("X"),
      "normal": myDate.format("MMMM D, YYYY")
    });
}
    
   });
    
};