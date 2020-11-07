class Ball
{
    constructor(x,y,r)
    {
        var options=
        {
            restitution:0.6,
            friction:1.0,
            density:1.0,
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    display()
    {
        push();
        fill("pink")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
}