class ball{
    constructor(x, y, r, color, bool){
        var options = {
            isStatic: bool,
            restitution: .3,
            density: 1,
            friction: 1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.color = color;
        World.add(world, this.body);
    }

    followMouse(){
        var pos = this.body.position;
        if(((pos.x - this.r < mouseX) && (mouseX < pos.x + this.r) && (pos.y - this.r < mouseY) && (mouseY < pos.y + this.r))){
        Matter.Body.setPosition(this.body, {x: mouseX, y: mouseY});
        } 
    }   

    display(){
        ellipseMode(CENTER);
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(this.color);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.r * 2, this.r * 2);
        pop();
    }
    
}