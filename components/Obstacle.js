export class Obstacle {
  constructor(game, width, height) {
    this.game = game
    this.width = width
    this.height = height
    // this.x = 140 + Math.random() * (705 - this.width - 140)
    this.x = Math.random() * (this.game.width - this.width)
    this.y = -this.height
    // this.speed = ...
  }

  update() {
    this.y += this.speed
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}