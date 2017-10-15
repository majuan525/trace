const chai = require('chai');

const expect = chai.expect;
var Demo = require('../lib/chai-expect-json.js');

var demo = new Demo();

describe('Demo',function(){
	it('https',function(done){//异步处理必须有done
		demo.fetchData('top250',function(data){//top250为url后面的
			expect(data).to.have.property('subjects');
			done();
		})
	})
})