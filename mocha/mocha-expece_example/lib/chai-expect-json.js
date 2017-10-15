  var https = require('https');

class Demo{
	

	fetchData(api,callback){
		var requestUrl = `https://api.douban.com/v2/movie/${api}`;
		https.get(requestUrl,function(res){
			var respondData = "";

			res.on('data',function(chunk){
				respondData += chunk;
			})

			res.on('end',function(){
				callback(JSON.parse(respondData));
			})
		})
	}

}

module.exports = Demo;