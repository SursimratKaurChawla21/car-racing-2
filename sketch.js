
var database
var form,player,game,gamestate=0,playercount=0
var allplayers



function setup(){
    database=firebase.database()
    createCanvas(500,500);
game= new Game()
game.getState()
game.start()
  

}

function draw(){
    background("white");
 if (playercount===4){
     game.writeState(1)
 }
 if (gamestate===1){
     clear()
     game.play()
 }
}

