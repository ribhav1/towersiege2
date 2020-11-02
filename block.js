class block{
    constructor(x, y, w, h, bool, color){
        var options = {
            isStatic: bool
        }  
        this.image = loadImage("redBlockImage.png");
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.color = color;
        this.visibility = 255;
        World.add(world, this.body);
        this.isOffScreen = function(){
            var pos = this.body.position;
            return (pos.y > height);
        }
        this.removeFromWorld = function(){
            World.remove(world, this.body);
        }
    }
    
    display(){
        if(this.body.velocity.x < 3){
        //imageMode(CENTER);
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill(this.color);
        stroke(255);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
    }else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity - 5;
        //tint(255, this.visibility);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
    }  
    }
}