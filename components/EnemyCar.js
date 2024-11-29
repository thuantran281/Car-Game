import { Obstacle } from './Obstacle.js'
import { ENEMY_CARS } from '../utils/constants.js'

export class EnemyCar extends Obstacle {
  constructor(game) {
    // const enemyCarWidth = ...
    // const enemyCarHeight = ...
    super(game, enemyCarWidth, enemyCarHeight)
    this.image = ENEMY_CARS[Math.floor(Math.random() * ENEMY_CARS.length)]
  }
}
