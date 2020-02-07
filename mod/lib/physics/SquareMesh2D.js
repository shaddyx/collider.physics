class SquareMesh2D extends lib.physics.Mesh2D{
    constructor(params){
        params = params || {};
        super();
       /** @type {Vector2D} */
       this.from = params.from || new lib.physics.Vector2D();
       /** @type {Vector2D} */
       this.to = params.to || new lib.physics.Vector2D();
    }
    moveTo(vector){
        this.from.sub(this.pos);
        this.from.add(vector);
        this.center.sub(this.pos);
        this.center.add(vector);
        this.to.sub(this.pos);
        this.to.add(vector);
        this.pos.eq(vector);
    }
    /**
     * 
     * @param {Mesh2D}
     * @returns {Vector2D|undefined}
     */
    intersects(mesh){
        if (mesh instanceof SquareMesh2D){
            if (this.to.x < mesh.from.x || this.from.x > mesh.to.x) return false;
            if (this.to.y < mesh.from.y || this.from.y > mesh.to.y) return false;
            let xDiff = this.center.x - mesh.center.x;
            let yDiff = this.center.y - mesh.center.y;
            if (Math.abs(xDiff) > Math.abs(yDiff)){
                return new lib.physics.Vector2D(xDiff, 0);
            }
            return new lib.physics.Vector2D(0, yDiff);
        }
        
    }
    
}