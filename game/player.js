class Jugador {
  constructor(size, image) {
    this.hpMax = 100
    this.hp = this.hpMax

    this.x = 2
    this.y = 3

    this.prevX = this.x
    this.prevY = this.y

    this.xd = this.x
    this.yd = this.y

    this.size = size
    this.image = image

    this.scaleX = -1
    this.scaleY = 1

    this.direction = 1

    this.isMapChanging = false
  }

  update() {
    let x = jugador.x
    let y = jugador.y

    if (Input.getButtonPress('ArrowRight')) {
      if (map[y][x + 1] != 1) {
        jugador.x++
        this.direction = 0
      }
    } else if (Input.getButtonPress('ArrowLeft')) {
      if (map[y][x - 1] != 1) {
        jugador.x--
        this.direction = 1
      }
    } else if (Input.getButtonPress('ArrowUp')) {
      if (map[y - 1][x] != 1) {
        jugador.y--
      }
    } else if (Input.getButtonPress('ArrowDown')) {
      if (map[y + 1][x] != 1) {
        jugador.y++
      }
    }

    if (Input.getButtonPress('k')) {
      this.hp -= 10
      console.log(this.hp)
    }

    this.handleOutsideMap()
  }

  handleOutsideMap() {
    if (this.x > map.length - 1) {
      this.isMapChanging = true
      worldX++
      mapLocation = worldLayout[worldY][worldX]
      map = worldMap[mapLocation]
      this.x = 0
    } else if (this.x < 0) {
      this.isMapChanging = true
      worldX--
      mapLocation = worldLayout[worldY][worldX]
      map = worldMap[mapLocation]
      this.x = 11
    } else {
      this.isMapChanging = false
    }
  }

  draw() {
    // dibujar jugador

    if (!this.isMapChanging) {
      this.xd += (this.x - this.xd) * 0.15
      this.yd += (this.y - this.yd) * 0.15
    } else {
      this.xd = this.x
      this.yd = this.y
    }

    image(
      this.image,
      this.xd * this.size,
      this.yd * this.size,
      this.size * this.scaleX,
      this.size * this.scaleY,
      this.direction * 16,
      0 * 16,
      16,
      16
    )

    let ratio = this.hp / this.hpMax
    let barWidth = 300 * ratio
    fill('black')
    rect(24, 10, 300, 32)
    fill('crimson')
    rect(24, 10, barWidth, 32)
  }
}
