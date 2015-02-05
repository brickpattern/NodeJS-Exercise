//Exercise 6 of 13 - learnyounnode

module.exports = function( dirName, fileExtension , funcCallBack) {
   	var path = require('path')
	var fs = require('fs')	
	var matchingFiles = []
	fs.readdir( dirName, function doneFetching(err, files){
	
		if (err)
		{
			//console.log ('inside module:' + err.toString())
			return funcCallBack(err)
		}
		else
			for (i in files)
			{
				//console.log('inside module; parsing files:' + files[i])
				if ( path.extname(files[i]) == '.' + fileExtension)
				 		matchingFiles.push(files[i])

				 // recommended code 
				 // files = files.filter(function (file){ return path.extname(file) === '.' + fileExtension})
			}
		return funcCallBack(null, matchingFiles)
		})
}
