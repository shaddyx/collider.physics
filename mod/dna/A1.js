// @depends(lib/physics/Collidable2D)
class A1 extends lib.physics.Collidable2D{
    constructor(...args){
        super(...args);
        this.size = new lib.physics.Vector2D(20, 20);
    }
    evo(dt){
        super.evo(dt);
        this.pos.add(this.speed.clone().mul(dt));
    }
    draw(){
        ctx.beginPath();
        lineWidth(3);
        background("#000")
        circle(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, this.size.x / 2);
        circle(this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, 1);
        stroke('#ff0000');
        ctx.closePath();
    }

}