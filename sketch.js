const mapa = {
  dungeon1:[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 5, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 5, 5, 5, 1],
  [1, 0, 0, 0, 0, 1, 5, 5, 5, 1],
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
], dungeon2:[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 5, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 5, 5, 5, 1],
  [1, 0, 0, 0, 0, 1, 5, 5, 5, 1],
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
],dungeon3:[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 5, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 5, 5, 5, 1],
  [1, 0, 0, 0, 0, 1, 5, 5, 5, 1],
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
]
};
/**
 0 - nada
 1 - muro
 5 - Agua
 */


let size = 0;

let input;

let x = 3;
let y = 3;

let map = mapa.dungeon1

function setup() {
  createCanvas(400, 400);

  Input.init();

  background(100);

  size = width / map.length;

  console.log(size);
}
function dibujarMapa(){
    for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const cell = map[y][x];

      stroke("white");

      if (cell == 1) {
        fill("gray");
      } else if(cell == 5){
        fill("dodgerblue");
      }else {
        fill("black");
      }

      rect(x * size, y * size, size, size);
    }
  }
}

function draw() {
  if (Input.getButtonPress("ArrowRight")) {
    if (map[y][x + 1] != 1) {
        x++
    }
  }else if(Input.getButtonPress("ArrowLeft")){
    if (map[y][x - 1] != 1) {
        x--
    }
  }else if(Input.getButtonPress("ArrowUp")){
   if (map[y - 1][x] != 1) {
        y--
    }
  } else if(Input.getButtonPress("ArrowDown")){
    if (map[y + 1][x] != 1) {
        y++
    }
  }
  

  dibujarMapa()
  fill("pink");
  rect(x * size, y * size, size, size);
}
