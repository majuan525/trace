const chai = require('chai');

const expect = chai.expect;
var Demo = require('../lib/chai-expect-error.js');

var demo = new Demo();

describe('Demo',function(){
	it('gas',function(){
		
		expect(function(){
			demo.engine('water')
		}).to.throw('not accpets');
		


	})
})