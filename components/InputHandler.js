export class InputHandler {
  constructor(game) {
    this.game = game
    window.addEventListener('keydown', (event) => {
      this.game.lastKey = `P ${event.key}`
    })
    window.addEventListener('keyup', (event) => {
      this.game.lastKey = `R ${event.key}`
    })
  }
}