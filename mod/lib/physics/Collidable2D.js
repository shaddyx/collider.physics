// @depends(lib/physics/Area2D)
class Collidable2D extends lib.physics.Area2D {
    constructor(...args){
        super(...args);
        /** @type {Mesh2D} */
        this.mesh = new lib.physics.Mesh2D();
        this.collided = [];
        this.prev = undefined;
    }
    evo(dt){
        super.evo(dt);
    }
    draw(){
        super.draw();
    }
    collideWith(element, dt){
        if (element == this || !(element instanceof lib.physics.KinematicObject2D)){
            return;
        }
        let antiVector = this.mesh.intersects(element.mesh);
        if (antiVector){
            this.pos = this.prev;
            this.speed.mul(antiVector.normalize());
            //this.collision(antiVector);
        }
    }
    /** @type {Vector2D} */
    collision(antiVector){
       
    }
}