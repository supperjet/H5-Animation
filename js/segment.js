function Segment(width, height, color){
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.width = width;
    this.height = height;
    this.color = (color === undefined)? "#ffffff" : utils.parseColor(color);
    this.rotation = 0;
    this.lineWidth = 1;
}
Segment.prototype.draw = function(context){
    var h = this.height,
        d = this.width + h,
        cr = h / 2;
    
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.lineWidth = this.lineWidth;
    context.strokeStyle = this.color;
    context.fillStyle = "#000";
    context.beginPath();
    context.moveTo(0, -cr);
    context.lineTo(d-2*cr, -cr);
    context.quadraticCurveTo(-cr+d, -cr, -cr+d, 0);
    context.lineTo(-cr+d, 0);
    context.quadraticCurveTo(-cr+d, -cr+h, d-2*cr, -cr+h);
    context.lineTo(0, -cr+h);
    context.quadraticCurveTo(-cr, -cr+h, -cr, 0);
    context.lineTo(-cr, 0);
    context.quadraticCurveTo(-cr, -cr, 0, -cr);
    context.closePath();
    context.fill();
    context.stroke();

    //draw the 2 "pins"
    context.beginPath();
    context.arc(0, 0, 3, 0, Math.PI*2, true);
    context.closePath()
    context.stroke();
    
    context.beginPath();
    context.arc(this.width, 0, 3, 0, Math.PI*2, true);
    context.closePath()
    context.stroke();
    
    context.restore();
}

Segment.prototype.getPin = function(){
    return {
        x:this.x + Math.cos(this.rotation)*this.width,
        y:this.y + Math.sin(this.rotation)*this.width
    }
}