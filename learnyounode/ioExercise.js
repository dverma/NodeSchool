var fs = require('fs');
var fileName = process.argv[2];

var noOfNewLines = fs.readFileSync(fileName).toString().split('\n').length -1 ;
console.log(noOfNewLines);
