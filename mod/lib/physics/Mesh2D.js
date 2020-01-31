class Mesh2D{
    constructor(vectors){
        this.vectorArray = [];
        if (vectors){
            for (let k in vectors){
                let vect = vectors[k];
                if (!(vect instanceof lib.physics.Vector2D)){
                    vect = new lib.physics.Vector2D(vect.x, vect.y)
                }
                this.vectorArray.push(vect);
            }
        }
        this.center = new lib.physics.Vector2D();
        this.pos = new lib.physics.Vector2D();
    }
    moveTo(vector){
        for (let k in this.vectorArray){
            this.vectorArray[k].sub(this.pos);
            this.vectorArray[k].add(vector);
        }
        this.pos.eq(vector);
    }
    /**
     * 
     * @param {Mesh2mesh
     * @returns {Vector2D|undefined}
     */
    intersects(mesh){
        for (let i=0; i < mesh.vectorArray.length; i++){
            let a = mesh.vectorArray[i];
            let b = i < (mesh.vectorArray.length - 1) ? mesh.vectorArray[i + 1]: mesh.vectorArray[0];
            let section = this.intersectsSection(a, b);
            if (section){
                return section;
            }
        }
    }
    /**
     * 
     * @param {Vector2D} vector1 
     * @param {Vector2D} vector2 
     * @returns {Section2D|undefined}
     */
    intersectsSection(vector1, vector2){
        for (let i=0; i < this.vectorArray.length; i++){
            let a = this.vectorArray[i];
            let b = i < (this.vectorArray.length - 1) ? this.vectorArray[i + 1]: this.vectorArray[0];
            if (lib.physics.MathUtil.intersects(a, b, vector1, vector2)){
                return new lib.physics.Section2D(a, b);
            }
        }
    }
}