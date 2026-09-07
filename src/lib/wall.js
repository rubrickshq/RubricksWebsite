// Builds a running-bond brick wall, laid course by course from the bottom up.
// Ported from the original inline script; the numbers and the seeded shade
// sequence are kept identical so the wall renders exactly as before.

const COLS = 7
const ROWS = 11
const BRICK_W = 60
const BRICK_H = 26
const GAP = 4
const COURSE_DELAY_MS = 85
const BRICK_DELAY_MS = 30

function makeRng(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

function shadeFor(v) {
  if (v < 0.14) return 'deep'
  if (v > 0.86) return 'light'
  return ''
}

export function buildWall() {
  const width = COLS * (BRICK_W + GAP) - GAP
  const height = ROWS * (BRICK_H + GAP) - GAP
  const half = (BRICK_W - GAP) / 2
  const rnd = makeRng(7)
  const bricks = []

  const lay = (x, y, w, delay) => {
    bricks.push({ x, y, width: w, height: BRICK_H, delay, shade: shadeFor(rnd()) })
  }

  for (let r = 0; r < ROWS; r++) {
    const y = r * (BRICK_H + GAP)
    const base = (ROWS - 1 - r) * COURSE_DELAY_MS
    let x = 0
    let i = 0
    if (r % 2) {
      lay(x, y, half, base)
      x += half + GAP
      i++
    }
    while (x + BRICK_W <= width) {
      lay(x, y, BRICK_W, base + i * BRICK_DELAY_MS)
      x += BRICK_W + GAP
      i++
    }
    if (width - x > GAP) {
      lay(x, y, width - x, base + i * BRICK_DELAY_MS)
    }
  }

  return { width, height, bricks }
}
