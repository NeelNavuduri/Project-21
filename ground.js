class ground{
    constructor(x,y,width,height){
        var ground_options = {
            isStatic: true
        }
        this.bodies = Bodies.rectangle(x,y,width,height,ground_options)
        World.add(world,this.bodies)
        this.width = width
        this.height = height

    }

    display(){
        push()
        rectMode(CENTER)
        rect(this.bodies.position.x, this.bodies.position.y, this.width, this.height)
        pop()
    }
}