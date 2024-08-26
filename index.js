const http =require("http");
const fs =require("fs");

const PORT=3000;


const server =http.createServer((req,res)=>{

    const handleReadFile=(statusCode,fileLocation)=>{
      fs.readFile(fileLocation,(err,data)=>{
         res.writeHead(statusCode,{"Content-Type":"text/html"});
         res.write(data);
         res.end();
      });
    }

    if(req.url==="/" || req.url==="/home"){
        handleReadFile(200,"./views/index.html");
    }
    else if(req.url==="/about"){
       handleReadFile(200,"./views/about.html");
    }
    else if(req.url==="/contact"){
      handleReadFile(200,"./views/contact.html");
    }
    else{
       handleReadFile(400,"./views/error.html");
    }
    console.log(req.url);
});

server.listen(PORT,()=>{
   console.log(`server is running`);
});

