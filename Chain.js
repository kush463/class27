class Chain {

    constructor(A,B){
    var option = {
        bodyA: A,
        bodyB: B,
        stiffness: 0.04,
        length: 10
    }
    this.chain = Constraint.create(option);
    World.add(world,this.chain);
    }
    display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}