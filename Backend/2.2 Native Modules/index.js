const fs= require("fs");

fs.writeFile("msg.txt","hello from node js!",(err)=>{
     if(err)
          throw err;
     console.log("the file has been saved");

});