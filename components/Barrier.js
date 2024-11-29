import { Obstacle } from './Obstacle.js'

export class Barrier extends Obstacle {
  constructor(game) {
    const barrierWidth = 110
    const barrierHeight = 108
    super(game, barrierWidth, barrierHeight)
    this.image = document.getElementById('barrier')
  }
}