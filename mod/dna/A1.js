// @depends(lib/physics/Area2D)
class A1 extends lib.physics.Area2D{
    constructor(...args){
        super(...args);
        this.pos.x = 10;
        this.pos.y = 10;
        this.size = new lib.physics.Vector2(20, 20);
    }
    evo(){
    }
    draw(){
        stroke('#ff0000');
        lineWidth(3);
        circle(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, this.size.x / 2);
        circle(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, 1);
    }

}