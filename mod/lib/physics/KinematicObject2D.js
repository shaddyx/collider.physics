// @depends(lib/physics/Area2D)
class KinematicObject2D extends lib.physics.Area2D {
    constructor(args){
        super(args);
        this.speed = args.speed || new lib.physics.Vector2D();
    }
    evo(dt){
        super.evo();
    }
    draw(){
    }
}