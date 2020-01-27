module.exports = function() {
    var Vect = lib.physics.Vector2D;
    /** @type {Vector2D} */
    let res = lib.physics.MathUtil.intersects(
        new Vect(1, 1),
        new Vect(5, 9),
        new Vect(2, 9),
        new Vect(8, 4)
    )
    lib.Asserts.equals(Math.floor(res.x), 4);
    lib.Asserts.equals(Math.floor(res.y), 7);
    res = lib.physics.MathUtil.intersects(
        new Vect(1, 1),
        new Vect(5, 9),
        new Vect(7, 8),
        new Vect(12, 3)
    )
    lib.Asserts.equals(res);
}