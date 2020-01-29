module.exports = function() {
    lab.spawn(dna.A1, {
        x:100, 
        y: 100,
        speed: new lib.physics.Vector2D(0, 0)
    })
    lab.spawn(dna.A1, {
        x:200, 
        y: 200,
        speed: new lib.physics.Vector2D(0, 0)
    })
}