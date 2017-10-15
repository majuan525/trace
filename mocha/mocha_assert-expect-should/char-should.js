const chai = require('chai');

const should = chai.should();

// chai assert should expect

describe('Demo',function(){
	it('使用should',function(){

		var value = 'hello';

		方法一:

		// value.should.exist;

		// value.should.be.a('string');

		// value.should.equal('hello');

		// value.should.have.length(5);

		方法二:

		value.should.exist.and.equal('hello').and.have.length(6).and.be.a('string');
	})
})