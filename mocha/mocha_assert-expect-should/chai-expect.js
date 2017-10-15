const chai = require('chai');

const expect = chai.expect;

// chai assert should expect

describe('Demo',function(){
	it('使用expect',function(){

		var value = 'hello';
		var number = 3;

		expect(number).to.be.at.most(5);最多
		expect(number).to.be.at.least(3);至少是
		expect(number).to.be.at.within(1,3);//在=1和=3之间

		expect(value).to.exist;
		expect(value).to.be.a('string');
		expect(value).to.equal('hello');
		expect(value).to.not.equal('你好');
		expect(value).to.have.length(5);


	})
})