class Player {
    constructor(){
      this.index=null
      this.distance=0
      this.name=null
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playercount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
    update(){
      var pindex = "players/player"+this.index
      database.ref(pindex).set({name:this.name,distance:this.distance})
    }
    static playerinfo(){
      database.ref("players").on("value",(a)=>{allplayers=a.val()})
    }
}