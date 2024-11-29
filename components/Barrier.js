import { Obstacle } from './Obstacle.js'

export class Barrier extends Obstacle {
  constructor(game) {
    // const barrierWidth = ...
    // const barrierHeight = ...
    super(game, barrierWidth, barrierHeight)
    this.image = document.getElementById('barrier')
  }
}
