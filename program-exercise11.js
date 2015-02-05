//exercise 11 of 13
//HTTP FILE SERVER
var http = require('http')
var fs = require('fs')

var server = http.createServer( function ( req, res) {
	var readStream = fs.createReadStream(process.argv[3])
	res.writeHead(200, { 'content-type': 'text/plain' })
	readStream.on('open', function(){readStream.pipe(res)})
	readStream.on('error', function(err) { 
		res.end(err.toString())  
		//console.log(err)
	})
	
})
server.listen(process.argv[2])