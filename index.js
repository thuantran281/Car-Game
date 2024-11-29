import { Game } from './components/Game.js'
import { GAME_HEIGHT, GAME_WIDTH, INTERVAL } from './utils/constants.js'

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT

const game = new Game(canvas.width, canvas.height);

let lastTime = 0
let timeSinceLastFrame = 0

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp
  timeSinceLastFrame += deltaTime

  if (timeSinceLastFrame >= INTERVAL) {
    context.clearRect(0, 0, canvas.width, canvas.height)
    game.update(deltaTime)
    game.render(context)
    timeSinceLastFrame = 0
  }

  if (!game.isGameOver) {
    requestAnimationFrame(animate)
  } 
}

animate(0)