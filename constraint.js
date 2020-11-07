class Sling
{
    constructor(bodyA,pointB)
    {
        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
            //length=20,
            //stiffness=0.05
        }

        this.sling=Constraint.create(options)
        World.add(world,this.sling);

    }
    display()

    {
        stroke("white");
        strokeWeight(3);
        var pos=this.sling.bodyA.position;
        line(pos.x,pos.y,this.sling.pointB.x,this.sling.pointB.y)
    }
}