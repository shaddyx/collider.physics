// @depends(lib/physics/KinematicObject2D)
class Collidable2D extends lib.physics.KinematicObject2D {
    constructor(...args){
        super(...args);
        /** @type {Mesh2D} */
        this.mesh = new lib.physics.Mesh2D();
        this.collided = [];
    }
    modeAndCollide(dt, vector){
        this.prev = this.pos.clone();
        this.__._ls.forEach(element => collideWith(element, vector, dt));
    }
    collideWith(element, vector, dt){
        if (!(element instanceof KinematicObject2D)){
            return;
        }
        if (this.mesh.intersects(element.mesh)){
            this.speed.mul(-1);
        }
    }
}