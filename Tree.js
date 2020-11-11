class Tree{
   constructor(x,y){
     var options = {
      isStatic: true
     }
     this.Image = loadImage("tree.png")
     this.body = Bodies.rectangle(x,y,options)
     World.add(world,this.body)
   }
    
     display(){
      imageMode(CENTER)
      image(this.Image,this.body.position.x,this.body.position.y)


     }



}