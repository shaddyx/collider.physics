// @depends(lib/physics/EventObject)
class Area2D extends lib.physics.EventObject {
    constructor(...args){
        super(...args);
        this.pos = new lib.physics.Vector2D();
        this.size = new lib.physics.Vector2D();
    }
}