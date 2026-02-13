class Jugador {
  constructor(size, image) {
    this.x = 3;
    this.y = 3;

    this.size = size;
    this.image = image;
  }

  update() {
    let x = jugador.x;
    let y = jugador.y;

    if (Input.getButtonPress("ArrowRight")) {
      if (map[y][x + 1] != 1) {
        jugador.x++;
      }
    } else if (Input.getButtonPress("ArrowLeft")) {
      if (map[y][x - 1] != 1) {
        jugador.x--;
        scale(-1, 1)
      }
    } else if (Input.getButtonPress("ArrowUp")) {
      if (map[y - 1][x] != 1) {
        jugador.y--;
      }
    } else if (Input.getButtonPress("ArrowDown")) {
      if (map[y + 1][x] != 1) {
        jugador.y++;
      }
    }
  }

  draw() {
    // dibujar jugador
    //fill("pink");
    //rect(this.x * this.size, this.y * this.size, this.size, this.size);
    image(
      this.image,
      this.x * this.size,
      this.y * this.size,
      this.size,
      this.size,
    );
  }
}
