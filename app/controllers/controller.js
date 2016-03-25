'use strict'

var moment = require('moment');
module.exports=function(app){
    
   app.get('/:query', function(req,res) {
  var myDate;
  
  if(/^\d{8,}$/.test(req.params.query)) {
    myDate = moment(req.params.query, "X");
  } else {
    myDate = moment(req.params.query, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      normal: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      normal: null
    });
  }
    
   });
    
};