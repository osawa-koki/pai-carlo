/* eslint-disable @typescript-eslint/no-non-null-assertion */

export const canvasElement = document.getElementById('canvas') as HTMLCanvasElement
export const ctx = canvasElement.getContext('2d')!
export const canvasSize = (canvasElement.width = canvasElement.height = 100)

export const startButtonElement = document.getElementById('start-button') as HTMLButtonElement
export const stopButtonElement = document.getElementById('stop-button') as HTMLButtonElement

export const pointsInElement = document.getElementById('points-in') as HTMLSpanElement
export const pointsOutElement = document.getElementById('points-out') as HTMLSpanElement

export const ratioInElement = document.getElementById('ratio-in') as HTMLSpanElement
export const ratioOutElement = document.getElementById('ratio-out') as HTMLSpanElement

export const paiElement = document.getElementById('pai') as HTMLSpanElement

/* eslint-enable @typescript-eslint/no-non-null-assertion */
