// @depends(lib/physics/Collidable2D)
class KinematicObject2D extends lib.physics.Collidable2D {
    constructor(args){
        super(args);
        this.speed = args.speed || new lib.physics.Vector2D();
    }
    evo(dt){
        this.prev = this.prev || this.pos.clone();
        super.evo();
    }
    draw(){
    }
    moveAndCollide(dt){
        this.mesh.moveTo(this.pos);
        this.__._ls.forEach(element => this.collideWith(element, dt));
        this.prev = this.pos.clone();
        this.pos.add(this.speed.clone().mul(dt));
        this.mesh.moveTo(this.pos);
    }
}