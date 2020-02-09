// @depends(lib/physics/KinematicObject2D)
class Collidable2D extends lib.physics.KinematicObject2D {
    constructor(...args){
        super(...args);
        /** @type {Mesh2D} */
        this.mesh = new lib.physics.Mesh2D();
        this.collided = [];
        this.prev = undefined;
    }
    evo(dt){
        this.prev = this.prev || this.pos.clone();
        super.evo(dt);
    }
    draw(){
        super.draw();
    }
    moveAndCollide(dt){
        this.mesh.moveTo(this.pos);
        this.__._ls.forEach(element => this.collideWith(element, dt));
        this.prev = this.pos.clone();
        this.pos.add(this.speed.clone().mul(dt));
        this.mesh.moveTo(this.pos);
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
        if (antiVector.x < antiVector.y){
            this.pos.add(new lib.physics.Vector2D(0, this.speed.y));
        } else {
            this.pos.add(new lib.physics.Vector2D(this.speed.x, 0));
        }
    }
}