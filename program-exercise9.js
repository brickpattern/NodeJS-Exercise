//exercise 8 of 13 - learnyounode 

var http = require('http')
var http1 = require('http')
var http2 = require('http')
var http3 = require('http')

var bl =  require('bl')
var bl1 =  require('bl')
var bl2 =  require('bl')
var bl3 =  require('bl')
var responseContent = [] 
var responseIndex  = 0


/*
http1.get(process.argv[2], function (res){
	res.setEncoding("utf8")

//	res.on('data', function(err, data) { 
//		if (err) return console.log('error:@@@@@@@@@' + err)
//	    data = data.toString() 
//		console.log( data.length)
//		console.log(data)
//	})
	
	res.pipe(bl1(function (err, data){ 
		//console.log("display:" + data.toString())
		if (err)
				console.log('error:@@@@@@@@@' + err)
		responseContent[responseIndex++] = data.toString()
		if (responseIndex == 3) printContents()
		//console.log(data.toString())
		}))

}).on('error' , console.log)

	

http2.get(process.argv[3], function (res){
	res.setEncoding("utf8")
	res.pipe(bl2(function (err, data){ 
		if (err)
				console.log('error:@@@@@@@@@' + err)
		responseContent[responseIndex++] = data.toString()
		if (responseIndex == 3) printContents()
		//console.log(data.toString())
		}))

}).on('error' , console.log)


http3.get(process.argv[4], function (res){
	res.setEncoding("utf8")
	res.pipe(bl3(function (err, data){ 
		if (err)
				console.log('error:@@@@@@@@@' + err)
		responseContent[responseIndex++] = data.toString()
		if (responseIndex == 3) printContents()
		//console.log(data.toString())
		}))

}).on('error' , console.log)

*/

function httpGet(i) {
  //console.log("inside httpGet : " + i )
   http.get(process.argv[2+i] , function ( res) {
   		res.setEncoding("utf8")
		res.pipe(bl(function (err, data){ 
			if (err)
				return console.log('error:@@@@@@@@@' + err)
			responseContent[responseIndex] = data.toString()
			responseIndex++
			if (responseIndex == 3) printContents()
   		}))
}).on('error', console.log)
}

function printContents() {
	//responseContent.forEach( function (s) { console.log(s)})
	for (i = 0 ; i< responseIndex ; i++) { console.log (responseContent[i]) }
}

for (var i =0  ; i < 3; i++)
{
	httpGet(i)
}