class Mesh2D{
    constructor(){
        this.vectorArray = [];
        this.center = new lib.physics.Vector2D();
    }
    /**
     * 
     * @param {Mesh2D} mesh
     * @returns {Vector2D|undefined}
     */
    intersects(mesh){
        for (let i=0; i < mesh.vectorArray.length; i++){
            let a = mesh.vectorArray[i];
            let b = i < (mesh.vectorArray.length - 1) ? mesh.vectorArray[i + 1]: mesh.vectorArray[0];
            if (this.intersectsSection(a, b)){
                return true;
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