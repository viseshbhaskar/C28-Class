class Slingshot {

constructor(body,point) {
var options = {
    bodyA: body,
    pointB: point,
    length: 55,
    stiffness: 0.04
  }
  this.sling = Constraint.create(options);

  World.add(myWorld,this.sling);
}
fly() {
  this.sling.bodyA = null;
}

display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.sling.pointB;
      line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }


}