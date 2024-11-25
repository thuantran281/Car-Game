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
    this.maxSpeed = 4
    this.image = document.getElementById('car')
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
      this.x = 705 - this.width
    }

    if (this.y < this.game.topMargin) {
      this.y = this.game.topMargin
    } else if (this.y > this.game.height - this.height) {
      this.y = this.game.height - this.height
    }
  }
}