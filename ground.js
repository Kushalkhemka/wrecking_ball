class Ground
{
    constructor(x,y)
    {
        var options=
        {
           isStatic:true
        }
       
        this.body=Bodies.rectangle(x,y,800,20,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display()
    {
        strokeWeight(2);
        stroke("black");
        fill("brown")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,800,20);
    }
}