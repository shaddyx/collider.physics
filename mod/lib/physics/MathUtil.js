class MathUtil{
    static radToDeg(radians){
        return radians * (180 / Math.PI);
    }
    static degToRad(angle){
        return angle / (180 / Math.PI);
    }

    /**
     *
     * @param {Vector2D} p1
     * @param {Vector2D} p2
     * @param {Vector2D} p3
     * @param {Vector2D} p4
     */
    static intersects(p1, p2, p3, p4){
        var d = (p1.x - p2.x) * (p4.y - p3.y) - (p1.y - p2.y) * (p4.x - p3.x);
        var da = (p1.x - p3.x) * (p4.y - p3.y) - (p1.y - p3.y) * (p4.x - p3.x);
        var db = (p1.x - p2.x) * (p1.y - p3.y) - (p1.y - p2.y) * (p1.x - p3.x);

        var ta = da / d;
        var tb = db / d;

        if (ta >= 0 && ta <= 1 && tb >= 0 && tb <= 1)
        {
            var dx = p1.x + ta * (p2.x - p1.x);
            var dy = p1.y + ta * (p2.y - p1.y);

            return new lib.physics.Vector2D(dx, dy);
        }

        return undefined;
    }
}
