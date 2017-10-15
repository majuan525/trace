/**
 * Created by Administrator on 2017/10/14.
 */
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer ({port:9000});

var clientMap = new Object();

var i = 0;

wss.on('connection',function (client) {

	client.name = ++i;
	clientMap[client.name] = client;//{xx:client,xxx2:client2}

	client.on('message',function (data) {
		//现在我们只知道需要向客户端发消息，但不知道怎么发
		//broadcast广播
		console.log("[server]客户端传来:" + data)
		broadcast(data,client);
	})

	client.on('error',function (error) {
		client.end();//如果有错误就关掉客户端
	})

	client.on('close',function (data) {//客服端关掉后执行的代码
		delete  clientMap[client.name];//删除这个人
		//broadcast广播谁谁谁下线了
		broadcast(client.name+'下线了',client)
	})
	function broadcast(message,client) {
		for(var key in clientMap){
			clientMap[key].send(client.name+'say:'+message+'\n')
		}
	}
})


//socket / port[0-65536] / ip[src ip - > dest ip] / tcp | udp 
























