class Box
{
    constructor(x,y,width,height)
    {
        var options=
        {
            restitution:0.6,
            friction:1.0,
            density:1.0,
        }
       
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display()
    {
        strokeWeight(2);
        stroke("green")
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}