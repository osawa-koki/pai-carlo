import { buttonElement, canvasSize, ctx, paiElement, pointsInElement, pointsOutElement, ratioInElement, ratioOutElement } from './elements'

const data = {
  running: false,
  in: 0,
  out: 0
}

ctx.beginPath()
ctx.arc(canvasSize / 2, canvasSize / 2, canvasSize / 2, 0, 2 * Math.PI)
ctx.stroke()

buttonElement.addEventListener('click', () => {
  if (data.running) {
    data.running = false
    buttonElement.textContent = 'Start'
    return
  } else {
    data.running = true
    buttonElement.textContent = 'Stop'
  }
  void (async () => {
    while (true) {
      if (!data.running) {
        break
      }
      const center = canvasSize / 2
      const x = Math.random() * canvasSize
      const y = Math.random() * canvasSize
      const r = Math.sqrt((x - center) ** 2 + (y - center) ** 2)
      const isIn = r <= center
      ctx.fillStyle = isIn ? '#f00' : '#00f'
      ctx.fillRect(x, y, 1, 1)
      data[isIn ? 'in' : 'out']++
      show()
      await new Promise(resolve => setTimeout(resolve, 10))
    }
  })()
})

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
