class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 0
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        Matter.Body.setPosition(body, {x: 120, y: 400});
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }
    display(){
    if(this.sling.bodyA){
    var bodyApos = this.sling.bodyA.position;
    var pointBpos = this.sling.pointB;
    line(bodyApos.x, bodyApos.y, pointBpos.x, pointBpos.y);
        }
    }
}
