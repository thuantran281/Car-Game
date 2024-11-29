const GAME_WIDTH = 850, GAME_HEIGHT = 600
const FPS = 120
const INTERVAL = 1000 / FPS
const ENEMY_CARS = [
    document.getElementById('red-car'),
    document.getElementById('pink-car'),
    document.getElementById('yellow-car'),
    document.getElementById('green-car'),
]

export { GAME_HEIGHT, GAME_WIDTH, FPS, ENEMY_CARS, INTERVAL }