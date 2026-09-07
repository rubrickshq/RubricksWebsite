import { describe, it, expect } from 'vitest'
import { buildWall } from './wall'

// Expected values come from running the original site's inline wall script (see the first commit).
const SHADES =
  '-,-,deep,-,-,-,deep,light,-,-,-,-,-,deep,-,-,-,-,-,-,-,deep,light,light,deep,-,light,-,-,-,-,-,-,light,-,-,-,-,-,-,-,-,deep,light,-,light,-,-,-,-,-,-,deep,-,-,deep,deep,-,-,-,light,-,-,-,-,-,-,-,-,-,-,deep,-,-,-,light,light,light,-,-,-,deep'.split(',')

describe('buildWall', () => {
  it('sizes the viewBox from 7 columns and 11 courses', () => {
    const wall = buildWall()
    expect(wall.width).toBe(444)
    expect(wall.height).toBe(326)
  })

  it('lays 82 bricks in running bond', () => {
    expect(buildWall().bricks).toHaveLength(82)
  })

  it('lays full bricks across an even course', () => {
    const row0 = buildWall().bricks.filter((b) => b.y === 0)
    expect(row0.map((b) => [b.x, b.width])).toEqual([
      [0, 60], [64, 60], [128, 60], [192, 60], [256, 60], [320, 60], [384, 60],
    ])
  })

  it('starts and ends an odd course with a half brick', () => {
    const row1 = buildWall().bricks.filter((b) => b.y === 30)
    expect(row1[0]).toMatchObject({ x: 0, width: 28 })
    expect(row1[row1.length - 1]).toMatchObject({ x: 416, width: 28 })
    expect(row1).toHaveLength(8)
  })

  it('delays each brick so courses are laid bottom-up, left-to-right', () => {
    const { bricks } = buildWall()
    const top = bricks.filter((b) => b.y === 0).map((b) => b.delay)
    const bottom = bricks.filter((b) => b.y === 300).map((b) => b.delay)
    expect(top).toEqual([850, 880, 910, 940, 970, 1000, 1030])
    expect(bottom).toEqual([0, 30, 60, 90, 120, 150, 180])
    // odd course: half brick, then full bricks continue the stagger
    const row1 = bricks.filter((b) => b.y === 30).map((b) => b.delay)
    expect(row1).toEqual([765, 795, 825, 855, 885, 915, 945, 975])
  })

  it('reproduces the original deterministic shade pattern', () => {
    const shades = buildWall().bricks.map((b) => b.shade || '-')
    expect(shades).toEqual(SHADES)
  })

  it('is deterministic across calls', () => {
    expect(buildWall()).toEqual(buildWall())
  })
})
