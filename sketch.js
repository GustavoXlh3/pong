var bola;
var raqueteJogador;
var raqueteComputador;
var bordas;

function setup() {
  createCanvas(400, 400);
  bola = createSprite(200,200,15,15);
  raqueteJogador = createSprite(390, 200, 15, 80);
  raqueteComputador = createSprite(10, 200, 15, 80);
  
}

function draw() {
  // limpa a tela
  background('black');
  bordas = createEdgeSprites();
  raqueteJogador.y = mouseY;
  bola.bounceOff([raqueteComputador, raqueteJogador, bordas[2], bordas[3]]);
  if (keyDown("space")){
    bola.velocityY = 3;
    bola.velocityX = 2;
    
  }
  
  //I.A. da raquete do computador
  raqueteComputador.y = bola.y;
  
  if (bola.x > 400 || bola.x < 0){
    bola.x = 200;
    bola.y = 200;
    
    bola.velocityX = 0;
    bola.velocityY = 0;  
  }
  
  drawSprites();
}