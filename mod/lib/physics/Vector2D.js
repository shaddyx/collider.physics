class Vector2D{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    mul(value){
        if (value instanceof Vector2D){
            return new Vector2D(
                this.x * value.x,
                this.y * value.y
            )
        }
        return new Vector2D(this.x * value, this.y * value);
    }
    /**
     * 
     * @param {Vector2D} value 
     */
    scalarMul(value){
        return this.x * this.y + value.x * value.y;
    }
    add(value){
        return new Vector2D(this.x + value.x, this.y + value.y)
    }
    sub(value){
        return new Vector2D(this.x - value.x, this.y - value.y)
    }
    length(){
        return Math.sqrt(this.x*this.x + this.y * this.y)
    }
    normalize(){
        let l = this.length()
        return new Vector2D(this.x / l, this.y / l);
    }
    rotate(angle){
        let x1 = this.x * cos(angle) - this.y * sin(angle);
        let y1 = this.y * cos(angle) + this.x * sin(angle);
        return new Vector2D(x1, y1);
    }

}