//exercise 6 of 13 - learnyounode 

var mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], function  (err, Files) {
	if (err)
			console.log('Error:' + err)
	else
	{
			//console.log('returned from module :' + Files.length)
			Files.forEach(function(file){
				console.log(file)
				})
	}			
	})