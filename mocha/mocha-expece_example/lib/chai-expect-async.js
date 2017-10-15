//异步处理
class Demo{
	waitTwoSecond(data,callback){
		setTimeout(function(){
			callback(data);
		},5000)
	}

}

module.exports = Demo;