const chai = require('chai');

const assert = chai.assert;

// chai assert should expect

describe('Demo',function(){
	it('使用assert',function(){

		var value = 'hello';

		assert.typeOf(value,'string');
		assert.equal(value,'hello');
		assert.lengthOf(value,6);
	})
})