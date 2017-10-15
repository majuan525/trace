const chai = require('chai');

const expect = chai.expect;
var Demo = require('../lib/chai-expect-async.js');

var demo = new Demo();

describe('Demo',function(){
	it('second',function(done){
		demo.waitTwoSecond('hello',function(data){
			expect(data).to.equal('你好');
			done();
		})
	})
})