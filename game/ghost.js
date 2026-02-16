

class Ghost {
  constructor(x, y, size, image) {
    this.x = x;
    this.y = y;

    this.xd = this.x
    this.yd = this.y

    this.size = size;
    this.image = image;

    this.timer = 0;
    this.timerMax = 30;
  }

  update() {
    this.timer++;

    if (this.timer > this.timerMax) {
      this.move();

      this.timer = 0;
    }
    // this.move()
  }

  getFreeDirections() {
    // encontrar 4 direcciones
    let x = this.x;
    let y = this.y;

    const locations = []

    // si derecha no tengo un bloque
    if (map[y][x + 1] != 1) {
        locations.push(3)
    }

    // si izquierda no tengo un bloque
    if (map[y][x - 1] != 1) {
        locations.push(2)
    }

    // si arriba no tengo un bloque
    if (map[y - 1][x] != 1) {
        locations.push(0)
    }

    // si abajo no tengo un bloque
    if (map[y + 1][x] != 1) {
        locations.push(1)
    }

    return locations[randomRange(0, locations.length - 1)]
  }

  move() {
    let randomLocation = this.getFreeDirections()

    if (randomLocation == 0) {
      this.y--;
    } else if (randomLocation == 1) {
      this.y++;
    } else if (randomLocation == 2) {
      this.x--;
    } else if (randomLocation == 3) {
      this.x++;
    }
  }

  draw() {
    image(
      this.image,
      this.xd * this.size,
      this.yd * this.size,
      this.size,
      this.size
    )
    this.xd += (this.x - this.xd) * 0.15
    this.yd += (this.y - this.yd) * 0.15
  }
}

// cavernicola objetivo = que se mueva aleatoriamente

/*

0 - arriba
1 - abajo
2 - izquierda
3 - derecha

*/

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
