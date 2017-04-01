import { Vector2 } from '../Vectors'

import { expect } from 'chai'
import * as assert from 'assert'

describe('Hello function', () => {
  it('should recognise squares', () => {

    expect(new Vector2(1, 0).magnitude()).to.equal(1)
    expect(new Vector2(0, 1).magnitude()).to.equal(1)

    let vector = new Vector2(0, 0)
    let vector2 = new Vector2(2, 2)

    expect(vector.magnitude()).to.equal(0)
    let result: Vector2 = vector.add(vector2)

    expect(result.x).to.equal(2)
    expect(result.y).to.equal(2)

    expect(+result.magnitude().toFixed(4)).to.equal(2.8284)
    expect(result.addTwo(2, 2).x).to.equal(4)
    expect(result.addTwo(2, 2).y).to.equal(4)
    expect(vector2.reverse()).to.deep.equal(new Vector2(-2, -2))
  })
})
