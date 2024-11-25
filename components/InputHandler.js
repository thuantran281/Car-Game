export default class InputHandler {
  constructor(game) {
    this.game = game
    window.addEventListener('keydown', (event) => {
      this.game.lastKey = `P ${event.key}`
      // console.log(this.game.lastKey)
    })
    window.addEventListener('keyup', (event) => {
      this.game.lastKey = `R ${event.key}`
      // console.log(this.game.lastKey)
    })
  }
}
