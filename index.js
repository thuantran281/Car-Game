const FPS = 60
const enemyCars = [
  document.getElementById('red-car'),
  document.getElementById('pink-car'),
  document.getElementById('yellow-car'),
  document.getElementById('green-car'),
]

let difficultyLevel = 1
let score = 0

const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.width = 850
canvas.height = 600

class InputHandler {
  constructor(game) {
    this.game = game
    window.addEventListener('keydown', (event) => {
      this.game.lastKey = `P ${event.key}`
      console.log(this.game.lastKey)
    })
    window.addEventListener('keyup', (event) => {
      this.game.lastKey = `R ${event.key}`
      console.log(this.game.lastKey)
    })
  }
}

class Car {
  constructor(game) {
    this.game = game
    this.carWidth = 50
    this.carHeight = 100
    this.width = this.carWidth
    this.height = this.carHeight
    this.x = 200
    this.y = 200
    this.speedX = 0
    this.speedY = 0
    this.maxSpeed = 5
    this.image = document.getElementById('blue-car')
    // this.fps = FPS
    // this.frameInterval = 1000 / this.fps
    // this.frameTimer = 0
  }

  draw(context) {
    // context.fillRect(this.x, this.y, this.width, this.height)
    context.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.x, this.y, this.width, this.height)
  }

  setSpeed(speedX, speedY) {
    this.speedX = speedX
    this.speedY = speedY
  }

  update() {
    if (this.game.lastKey === 'P ArrowLeft') {
      this.setSpeed(-this.maxSpeed, 0)
    } else if (this.game.lastKey === 'P ArrowRight') {
      this.setSpeed(this.maxSpeed, 0)
    } else if (this.game.lastKey === 'P ArrowUp') {
      this.setSpeed(0, -this.maxSpeed)
    } else if (this.game.lastKey === 'P ArrowDown') {
      this.setSpeed(0, this.maxSpeed)
    } else {
      this.setSpeed(0, 0)
    }

    this.x += this.speedX
    this.y += this.speedY

    // set limit to prevent the car from going on the pavement
    if (this.x < 140) {
      this.x = 140
    } else if (this.x > 705 - this.width) {
      this.x = 705- this.width
    }

    if (this.y < this.game.topMargin) {
      this.y = this.game.topMargin
    } else if (this.y > this.game.height - this.height) {
      this.y = this.game.height - this.height
    }
  }
}

class Object {
  constructor(game) {
    this.game = game
  }

  draw(context) {
    context.drawImage(this.image, 0, 0, this.x, this.y, this.width, this.height)
  }
}

class Barrier extends Object {
  constructor(game) {
    super(game)
    this.game = game
    this.image = document.getElementById('barrier')
    this.imageWidth = 216
    this.imageHeight = 100
    this.width = this.imageWidth
    this.height = this.imageHeight
    this.x = Math.random() * 705 - this.width
    this.y = this.game.topMargin + Math.random() * (this.game.height - this.height - this.game.topMargin)
  }
}

class EnemyCar extends Object {
  constructor(game) {
    super(game)
    this.game = game
  }
}

class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.topMargin = 5
    this.lastKey = undefined
    this.input = new InputHandler(this)
    this.car = new Car(this)
    this.numberOfCars = 20
    this.numberOfBarriers = 15
    this.obstacles = []
    this.gameOver = false

    this.level = 1
    this.score = 0
  }

  render(context) {
    this.car.draw(context)
    this.car.update()
    this.obstacles.forEach((obstacle) => obstacle.draw(context))
  }

  init() {
    for (let i = 0; i < this.numberOfCars; i += 1) {
      this.obstacles.push(new Barrier(this))
    }

    for (let i = 0; i < this.numberOfBarriers; i += 1) {
      this.obstacles.push(new EnemyCar(this))
    }
  }
}

const game = new Game(canvas.width, canvas.height)

game.init()

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  game.render(context)
  requestAnimationFrame(animate)
}

animate()