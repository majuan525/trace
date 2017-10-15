var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs  = require('fs');


app.get('/',function(req,res){
	function callback(data){
		res.send(data.toString());
	}

	fs.readFile('./index.html',function(err,data){
		callback(data);
	})
})


var clientMap = new Object();


var i = 0;

io.on('connection',function(client){
	client.name = ++i;
	clientMap[client.name] = client;


	client.on('message',function(data){
		// 现在这里我们只知道需要向客户端发消息，但不知道怎么发
		// broadcast

		console.log('[server]客户端传来：' + data);
		broadcast(data,client);
	})


	client.on('disconnect',function(data){
		delete clientMap[client.name];
		console.log(client.name+'下线了');
		//broadcast
		broadcast(client.name+'下线了',client)
	})

	function broadcast(message,client){
		for(var key in clientMap){
			clientMap[key].send(client.name+'say:' + message+ '\n');
		}
	}
})
http.listen(9000,function(){
	console.log('server running')
})

