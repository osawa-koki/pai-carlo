import {
  ctx,
  canvasSize,
  startButtonElement,
  stopButtonElement,
  pointsInElement,
  pointsOutElement,
  ratioInElement,
  ratioOutElement,
  paiElement
} from './elements'

const data = {
  running: false,
  in: 0,
  out: 0
}

ctx.beginPath()
ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2, 0, 2 * Math.PI)
ctx.stroke()

startButtonElement.addEventListener('click', () => {
  data.running = true
  startButtonElement.disabled = true
  stopButtonElement.disabled = false
  run()
})
stopButtonElement.addEventListener('click', () => {
  data.running = false
  startButtonElement.disabled = false
  stopButtonElement.disabled = true
})

function run (): void {
  if (!data.running) return

  const center = canvasSize / 2
  const x = Math.random() * canvasSize
  const y = Math.random() * canvasSize
  const r = Math.sqrt((x - center) ** 2 + (y - center) ** 2)
  const isIn = r <= center
  ctx.fillStyle = isIn ? '#f00' : '#00f'
  ctx.fillRect(x, y, 1, 1)
  data[isIn ? 'in' : 'out']++
  show()

  requestAnimationFrame(run)
}

function show (): void {
  const { in: inPoints, out: outPoints } = data
  const totalPoints = inPoints + outPoints
  const ratio = inPoints / totalPoints
  const pai = ratio * 4
  pointsInElement.textContent = inPoints.toFixed(0)
  pointsOutElement.textContent = outPoints.toFixed(0)
  ratioInElement.textContent = (ratio * 100).toFixed(5)
  ratioOutElement.textContent = ((1 - ratio) * 100).toFixed(5)
  paiElement.textContent = pai.toFixed(10)
}
