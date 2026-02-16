
/**
 0 - nada
 1 - muro
 5 - Agua
 */

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
  playerImage = loadImage('/assets/skeleton.png')
  ghostImage = loadImage('/assets/fantasma.png')
  tiles = loadImage('/assets/tiles.png')
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

function dibujarMapa() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const cell = map[y][x]

      stroke('white')

      let xpos = 2 * 16
      let ypos = 0 * 16

      if (cell == 1) {
        xpos = 1 * 16
        ypos = 0 * 16
      } else if (cell == 5) {
        xpos = 3 * 16
        ypos = 1 * 16
      } else if (cell == 2){
        xpos = 0 * 16
        ypos = 1 * 16
      } else if (cell == 4){
        xpos = 0 * 16
        ypos = 2 * 16
      } else if (cell == 3){
        xpos = 1 * 16
        ypos = 2 * 16
      } else if (cell == 6){
        xpos = 2 * 16
        ypos = 2 * 16
      }else if (cell == 7){
        xpos = 1 * 16
        ypos = 1 * 16
      } else if (cell == 8){
        xpos = 0 * 16
        ypos = 0 * 16
      }

      image(
        tiles,
        // posicion en la pantalla
        x * size,
        y * size,
        // el tamaño en la pantalla
        size,
        size,

        //
        xpos,
        ypos,

        16,
        16
      )
      //rect(x * size, y * size, size, size)
    }
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
