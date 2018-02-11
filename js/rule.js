function Rule(width, height, color) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.width = width || 500;
    this.height = height || 100;
    this.color = color || "#ff0000";
}

Rule.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.scale(this.scaleX, this.scaleY);
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.fillRect(0,0,this.width, this.height)
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}

Rule.prototype.getBounds = function() {
    return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
    };
}