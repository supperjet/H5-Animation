function Ball3d(radius){
    if(radius === undefined) {radius = 40;}
    this.x = 0;
    this.y = 0;
    this.xpos = 0;
    this.ypos = 0;
    this.zpos = 0;
    this.vz = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius;
    this.rotation = 0;
    this.mass = 1;
    this.scaleX = 1;
    this.scaleY = 1;
    this.name = "";
    this.lineWidth = 1;

}

Ball3d.prototype.draw = function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    context.lineWidth = this.lineWidth;
    var gradient = context.createRadialGradient(0, 0, 0, 0, 0, this.radius );
        gradient.addColorStop(0,"rgba(255,255,255,1)");
        gradient.addColorStop(0.2,"rgba(0,255,255,1)");
        gradient.addColorStop(0.3,"rgba(0,0,100,1)");
        gradient.addColorStop(1,"rgba(0,0,0,0.1)");
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(0,0,this.radius,0,Math.PI*2,false);
    context.closePath();
    context.fill();
    context.restore();
}

    
