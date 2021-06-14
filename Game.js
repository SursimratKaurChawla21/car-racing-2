class Game{
constructor(){

}
getState(){
       database.ref("gameState").on("value",function(s){gamestate=s.val()})

}

writeState(g){
database.ref("/").update({gameState:g})
}

async start(){
    if(gamestate===0){
        player=new Player()
       var sar =await database.ref("playerCount").once("value")
       if(sar.exists()){
         playercount=sar.val()
         player.getCount()
       }
       
    
       
        form = new Form ()
        form .display()
    }
}
play(){
    form.hide()
    text("let's play",500,200)
    Player.playerinfo()
    if(allplayers!==undefined){
       var car = 130
       for(var pla in allplayers ){
        if(pla==="player"+player.index)
        fill("red")
        else
        fill("cyan")
       
       car+=20
       text(allplayers[pla].name+":"+allplayers[pla].distance,120,car)
  }
}
if(keyDown ("UP")&& player.index!==null){
player.distance+=30
player.update()
}


}
}