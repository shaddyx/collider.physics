// @depends(lib/physics/EventObject)
class Area2D extends lib.physics.EventObject {
    constructor(args){
        super(args);
        this.pos = new lib.physics.Vector2D();
        this.size = new lib.physics.Vector2D();
        if (args.x != undefined){
            this.pos.x = args.x;
            this.pos.y = args.y;
        }
    }
    evo(dt){
    }
    draw(){
    }
}