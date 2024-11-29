import { InputHandler } from './InputHandler.js'
import { Car } from './Car.js'
import { EnemyCar } from './EnemyCar.js'
import { Barrier } from './Barrier.js'

export class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.topMargin = 5
    this.lastKey = undefined
    this.input = new InputHandler(this)
    this.car = new Car(this)
    this.obstacles = []
    this.obstacleTimer = 0
    // this.spawnInterval = ...
    // this.level = 1
    // this.score = 0
    this.isGameOver = false
  }

  render(context) {
    this.car.draw(context)
    this.car.update()
    this.obstacles.forEach((obstacle) => obstacle.draw(context))
  }

  addObstacle() {
    // const randomObstacle = Math.random() > ... ? EnemyCar : Barrier
    this.obstacles.push(new randomObstacle(this))
  }

  update(deltaTime) {
    if (this.isGameOver) {
      return
    }

    this.car.update()
    this.obstacleTimer += deltaTime

    if (this.obstacleTimer > this.spawnInterval) {
      this.addObstacle()
      this.obstacleTimer = 0
    }

    this.obstacles.forEach((obstacle) => obstacle.update())

    this.obstacles.forEach((obstacle) => {
      if (this.checkCollision(obstacle, this.car)) {
        this.isGameOver = true
        // console.log('game over')
      }
    })
  }

  checkCollision(thisCar, other) {
    // const paddingX = ...
    // const paddingY = ...

    return (
      thisCar.x + paddingX < other.x + other.width - paddingX &&
      thisCar.x + thisCar.width - paddingX > other.x + paddingX &&
      thisCar.y + paddingY < other.y + other.height - paddingY &&
      thisCar.y - paddingY + thisCar.height > other.y + paddingY
    )
  }
}
