// @depends(lib/physics/Area2D)
class Collidable extends lib.physics.Area2D {
    constructor(...args){
        super(...args);
        this.mesh = new lib.physics.Mesh2D();
        this.collided = [];
        this.physicsDone = false;
    }
    evo(dt){
        this.physicsProcess(dt);
        super.evo(dt);
    }
    physicsProcess(dt){
        this.physicsDone = true;
    }
    draw(){
        this.physicsDone = false;
    }
}