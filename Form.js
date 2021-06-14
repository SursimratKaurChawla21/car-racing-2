class Form{
    constructor (){
         this.button = createButton("start")
        this.greet = createElement("h3")
        this.input = createInput("enter your name to start")
    }
    hide(){
        this.button.hide()
        this.greet.hide()
        this.input.hide()
    }
    display(){
        var title = createElement("h2")
        title.html("car Racing")
        title.position (550,50)
        
        this.input.position(450,250)
      
        this.button.position(500,300)
        
       this. button.mousePressed(()=>{this.input.hide()
       this. button.hide()
        player.name = this.input.value()
        playercount+=1
        player.index=playercount
        player.update()
        player.updateCount(playercount)
        this.greet.html("welcome   " +player.name)
        this.greet.position(450,250)


        })
        
        
        
    }
}