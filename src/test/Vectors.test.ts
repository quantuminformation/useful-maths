import * as MathChecks from '../MathChecks'

import { expect } from 'chai'
import 'mocha'

describe('Hello function', () => {
  it('should recognise squares', () => {
    expect(MathChecks.isSquare(1)).to.equal(true)
    expect(MathChecks.isSquare(4)).to.equal(true)
    expect(MathChecks.isSquare(9)).to.equal(true)
    expect(MathChecks.isSquare(16)).to.equal(true)
    expect(MathChecks.isSquare(81)).to.equal(true)
    expect(MathChecks.isSquare(100)).to.equal(true)
    expect(MathChecks.isSquare(2)).to.equal(false)
    expect(MathChecks.isSquare(3)).to.equal(false)
    expect(MathChecks.isSquare(5)).to.equal(false)
    expect(MathChecks.isSquare(0)).to.equal(false)
    expect(MathChecks.isSquare(-1)).to.equal(false)
    expect(MathChecks.isSquare(-4)).to.equal(false)
  })
})
