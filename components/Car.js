export class Car {
  constructor(game) {
    this.game = game
    // this.carWidth = ...
    // this.carHeight = ...
    this.width = this.carWidth
    this.height = this.carHeight
    // this.x = ...
    // this.y = ...
    this.speedX = 0
    this.speedY = 0
    // this.maxSpeed = ...
    this.image = document.getElementById('blue-car')
  }

  draw(context) {
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

    // if (this.x < 140) {
    //   this.x = 140
    // } else if (this.x > 705 - this.width) {
    //   this.x = 705 - this.width
    // }

    if (this.x < 0) {
      this.x = 0
    } else if (this.x > this.game.width - this.width) {
      this.x = this.game.width - this.width
    }

    if (this.y < this.game.topMargin) {
      this.y = this.game.topMargin
    } else if (this.y > this.game.height - this.height) {
      this.y = this.game.height - this.height
    }
  }
}