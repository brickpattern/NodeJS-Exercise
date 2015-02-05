//exercise 8 of 13 - learnyounode 

var http = require('http')
var bl =  require('bl')

http.get(process.argv[2], function (res){
	res.setEncoding("utf8")
/*
	res.on('data', function(err, data) { 
		if (err) return console.log('error:@@@@@@@@@' + err)
	    data = data.toString() 
		console.log( data.length)
		console.log(data)
	})
*/	
	res.pipe(bl(function (err, data){ 
		//console.log("display:" + data.toString())
		if (err)
				console.log('error:@@@@@@@@@' + err)
		data = data.toString()
		console.log( data.length)
		console.log(data)
		}))

}).on('error' , console.log)

	