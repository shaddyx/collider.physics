module.exports = function() {
    lab.spawn(dna.A1, {
        x:10, 
        y: 10,
        speed: new lib.physics.Vector2D()
    })

    lab.spawn(dna.A1, {
        x:100, 
        y: 100,
        speed: new lib.physics.Vector2D(100, 100)
    })
    lab.spawn(dna.A1, {
        x:200, 
        y: 200,
        speed: new lib.physics.Vector2D(0, 0)
    })
}