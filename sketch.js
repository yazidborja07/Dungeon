let jugador

let fantasmas = []

let size = 0

let input

let mapLocation = worldLayout[worldY][worldX]
let map = worldMap[mapLocation]

let playerImage
let ghostImage

let tiles

function preload() {
  playerImage = loadImage("/assets/skeleton.png")
  ghostImage = loadImage("/assets/fantasma.png")
  tiles = loadImage("/assets/tiles.png")
}

function setup() {
  let game = createCanvas(650, 650)
  game.position((windowWidth - width) / 2, 0)

  Input.init()

  background(100)

  size = width / map.length

  noSmooth()

  jugador = new Jugador(size, playerImage)

  for (let i = 0; i < 3; i++) {
    // fantasmas.push(new Ghost(6, 8, size, ghostImage))
  }
}

function draw() {
  dibujarMapa()

  for (let i = 0; i < fantasmas.length; i++) {
    let gasparin = fantasmas[i]
    gasparin.draw()
    gasparin.update()
  }

  jugador.update()
  jugador.draw()
}
