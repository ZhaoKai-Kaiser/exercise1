var assert = require('assert')

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.strictEqual(-1, [1, 2, 3].indexOf(4) /* 填空题 */)
    })
  })
})

describe('assert', function () {
  it('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    }
    var b = {
      c: {
        e: 1
      }
    }
    // 修改下面代码使得满足测试描述
    assert.deepStrictEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn () {
      xxx
    }
    // 修改下面代码使得满足测试描述
    // try {
    //   fn()
    // } catch (err) {
    //   console.log(err)
    // }
    assert.throws(fn)
  })

  it('输入值应当为真', function () {
    assert
    // 修改下面代码使得满足测试描述
    // try {
    //   fn()
    // } catch (err) {
    //   console.log(err)
    // }
    assert(1, '不是true')
  })

  it('值应当为 null、undefined', function () {
    assert.ifError(null)
  })
})

describe('test async function', function () {
  it('should without error', function (done) {
    let timer = setTimeout(function () {
      clearTimeout(timer)
      let status = false
      if (status) {
        done()
        return
      }
      done(new Error())
    }, 1000)
  })
})

describe('test pending', function () {
  it.skip('should pending1')
  it.only('should pending2')
  it('should test ohter')
})
