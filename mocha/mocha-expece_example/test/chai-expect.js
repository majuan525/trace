/**
 * Created by majuan on 17/10/15.
 */
const chai = require('chai');

const expect = chai.expect;
var Demo = require('../lib/chai-expect.js');

var demo = new Demo();

describe('Demo',function(){
    it('3*10==30',function(){
        var subtotal = demo.subtotal('10','3');
        expect(subtotal).to.equal(30);

    })
})