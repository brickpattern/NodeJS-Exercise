//exercise 7 of 13 - learnyounode 

var http = require('http');
//nsole.log(process.argv[2])
http.get( process.argv[2], function (res) {
	 res.setEncoding("utf8")
	 //nsole.log ("GET response:" + res.statusCode )
	 res.on('data',  function(data) { console.log(data)})
	}).on('error', function(e) {
  			console.log("Got error: " + e.message);
			});
