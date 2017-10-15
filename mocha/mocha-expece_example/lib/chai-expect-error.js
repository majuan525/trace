var https = require('https');

class Demo{
	
	engine(fuel){
		if(!(fuel === 'gas')){

			throw new Error('not accpet');
		}
	}
}

module.exports = Demo;