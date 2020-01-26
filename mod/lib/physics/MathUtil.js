class MathUtil{
    static radToDeg(radians){
        return radians * (180 / Math.PI);
    }
    static degToRad(angle){
        return angle / (180 / Math.PI);
    }
}