
//start of challenge#2 - learnyounode 
/*
var i =  process.argv.length
var y = 0 
while (i)
{
	if (i > 2) y = y + Number(process.argv[i-1]);
	i = i -1; 
}
console.log(y)
*/

//start of challenge3 - sync file read
/*
var fs = require('fs')
var text  = fs.readFileSync(process.argv[2]).toString()
//console.log(text)
var lines = text.split('\n')
console.log(lines.length-1)
*/

//start of challenge4 - async file read
/*
var fs = require('fs')
fs.readFile(process.argv[2], 'utf8' , function doneReading(err, fileContents) {
	var lines = fileContents.split('\n')	
    
	console.log(lines.length-1)})
*/

//start of challenge5 - FILTERED LS 
var path = require('path')
var fs = require('fs')
//console.log(process.argv[2])
//console.log(process.argv[3]	)
fs.readdir(process.argv[2] , function doneFetching(err, files){
	//console.log(files.length)
	//console.log(err)
	for ( i =0 ; i<files.length; i++)
	{
		
			//console.log(path.extname(files[i]).replace('.' , ''))
			if (path.extname(files[i]).replace('.' , '') == process.argv[3] )
				console.log(files[i])
	}
})