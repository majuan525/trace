/**
 * Created by Administrator on 2017/10/14.
 */
var net = require('net');
var port = 9000;
var host = '127.0.0.1';//localhost

var client = new net.Socket();
client.setEncoding = "utf-8";

console.log(client);

client.connect(port,host,function () {//建立连接
	client.write('[client]你好！')//写入你好
	say();
})
client.on('data',function (data) {//监听data
	console.log('[client]服务器端发来消息'+data);//有几个连接发几个
})
client.on('error',function (error) {
	console.log(error);
})
client.on('close',function () {
	//ui cient.connet()
	console.log('close');
})

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function say() {
	rl.question('请输入: ', (inputStr) => {//inputStr为时讯内容
		if(inputStr!='bye'){//如果时讯内容不为bye就写入时讯并换行
			client.write(inputStr+'\n');
			say()
		}else{//否则销毁内容
			client.destroy();
			rl.close();
		}
	});
}























