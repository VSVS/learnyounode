var fs = require('fs')

function filterFiles(){
  fs.readdir(process.argv[2], function(err, list){
    if(err) throw error;
    else{

      var phpfiles = list + '.' + 'php'

      console.log(phpfiles)
    }
  })
}

filterFiles();
