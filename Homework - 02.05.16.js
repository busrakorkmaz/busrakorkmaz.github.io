var http = require('http');

var text = 'Welcome to CS102'.split('');
http.createServer(function(request,response) {
response.writeHead(200);
request.write(JSON.stringify(request.headers));

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter; 
event.on(function() {
    console.log('Welcome' + 'to' + 'CS102');
    });
    
setInterval (function() {
event.emit();    
for (var i=0, x=''; x = text.charAt(i); i++);
console.log(x); 
},500);

response.end();
}).listen(8080);
   
    

