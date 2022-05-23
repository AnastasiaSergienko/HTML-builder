const fs = require('fs');

fs.writeFile('02-write-file/text.txt', '', function(error){
  if(error) throw error; 
});