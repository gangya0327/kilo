function add(a, b) {
  return a + b
}

describe('测试单侧', () => {
  it('传入两个数字', () => {
    expect(add(1, 2)).toBe(3)
  })
})
