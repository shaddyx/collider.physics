class Vector2D{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    mul(value){
        if (value instanceof Vector2D){
            this.x *= value.x;
            this.y *= value.y;
            return this;
        }
        this.x *= value;
        this.y *= value;
        return this;
    }
    /**
     * 
     * @param {Vector2D} value 
     */
    scalarMul(value){
        return this.x * this.y + value.x * value.y;
    }
    add(value){
        this.x += value.x;
        this.y += value.y;
        return this;
    }
    sub(value){
        this.x -= value.x;
        this.y -= value.y;
        return this;
    }
    length(){
        return Math.sqrt(this.x*this.x + this.y * this.y)
    }
    normalize(){
        let l = this.length()
        this.x = this.x / l, 
        this.y = this.y / l
        return this;
    }
    rotate(angle){
        let x1 = this.x * cos(angle) - this.y * sin(angle);
        let y1 = this.y * cos(angle) + this.x * sin(angle);
        this.x = x1;
        this.y = y1;
        return this;
    }
    getAngle(vector){
        return Math.acos(this.scalarMul(vector) / (this.length()* vector.length()));
    }

    clone(){
        return new Vector2D(this.x, this.y);
    }


}