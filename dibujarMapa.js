function dibujarMapa() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const cell = map[y][x]

      stroke("white")

      let xpos = 2 * 16
      let ypos = 0 * 16

      if (cell == 1) {
        xpos = 1 * 16
        ypos = 0 * 16
      } else if (cell == 5) {
        xpos = 3 * 16
        ypos = 1 * 16
      } else if (cell == 8) {
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
        16,
      )
      //rect(x * size, y * size, size, size)
    }
  }
}
