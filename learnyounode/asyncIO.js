var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName,'utf8', function noOfLines(err, fileContents){
	return console.log(fileContents.split('\n').length-1);
});
