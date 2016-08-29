function Ball3d(radius,color){
    if(radius === undefined) {radius = 40;}
    if(color === undefined){color = '#00ff00';}
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
    this.color = utils.parseColor(color);
    this.lineWidth = 1;
    this.visible = true;

}

Ball3d.prototype.draw = function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(0,0,this.radius,0,Math.PI*2,false);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}
