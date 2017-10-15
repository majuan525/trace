
describe('Demo',function(){
	describe('方法1',function(){

		// lifecycle
		// hooks

		before(function(){
			console.log('-->测试之前')
		})


		after(function(){
			console.log('-->测试之后')
		})


		beforeEach(function(){
			console.log('-->每条测试之前')
		})


		afterEach(function(){
			console.log('-->每条测试之后')
		})



		context('情景1' ,function(){
			it('测试 1',function(){

			})

			it('测试 2',function(){

			})
		})


	})
})