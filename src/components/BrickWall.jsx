import { buildWall } from '../lib/wall'

const wall = buildWall()

export default function BrickWall() {
  return (
    <svg className="wall-svg animate" viewBox={`0 0 ${wall.width} ${wall.height}`}>
      {wall.bricks.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.width}
          height={b.height}
          className={b.shade || undefined}
          style={{ '--d': `${b.delay}ms` }}
        />
      ))}
    </svg>
  )
}
