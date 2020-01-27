class MathUtil{
    static radToDeg(radians){
        return radians * (180 / Math.PI);
    }
    static degToRad(angle){
        return angle / (180 / Math.PI);
    }

    /**
     * 
     * @param {Vector2D} start1 
     * @param {Vector2D} end1 
     * @param {Vector2D} start2 
     * @param {Vector2D} end2 
     */
    static intersects(start1, end1, start2, end2){
        let vector1 = (end2.x - start2.x) * (start1.y - start2.y) - (end2.y - start2.y) * (start1.x - start2.x);
        let vector2 = (end2.x - start2.x) * (end1.y - start2.y) - (end2.y - start2.y) * (end1.x - start2.x);
        let vector3 = (end1.x - start1.x) * (start2.y - start1.y) - (end1.y - start1.y) * (start2.x - start1.x);
        let vector4 = (end1.x - start1.x) * (end2.y - start1.y) - (end1.y - start1.y) * (end2.x - start1.x);
        return ((vector1 * vector2 <= 0) && (vector3 * vector4 <= 0));
    }
}