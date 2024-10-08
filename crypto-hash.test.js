const cryptoHash = require('./crypto-hash')

describe('cryptoHash()', () => {
  it('generates a SHA-256 hashed output', () => {
    expect(cryptoHash('foo'))
      .toEqual('b2213295d564916f89a6a42455567c87c3f480fcd7a1c15e220f17d7169a790b') // updated expected value based on how inputs are handled.
  })

  it('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three'))
      .toEqual(cryptoHash('three', 'one', 'two'))
  })

  it('produces a unique hash when properties of the input object have changed', () => {
    const obj = { a: 1 }
    const originalHash = cryptoHash(obj)
    obj.a = 2
    expect(cryptoHash(obj)).not.toEqual(originalHash)
  })
})
