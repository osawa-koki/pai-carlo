import { buttonElement, canvasSize, ctx } from './elements'

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
      await new Promise(resolve => setTimeout(resolve, 10))
    }
  })()
})
