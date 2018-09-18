function LineCircle(opt) {
    this.x = opt.x || 0;
    this.y = opt.y || 0;
    this.data = opt.data || [];
    this.radius = opt.radius || 80;
    this.initAngle = opt.initAngle || 0;
    this.lineColor = opt.color || '#ff0';
}

LineCircle.prototype.draw = function(ctx) {
    ctx.save();
    if(this.data.length == 256) {
        ctx.lineWidth = 1.5;
    }
    if(this.data.length == 128) {
        ctx.lineWidth = 3;
    }
    ctx.strokeStyle = this.lineColor;
    ctx.lineCap = 'round';
    var len = this.data.length || 128;
    if(len > 0) {
        var deleta = 360/len;
        for(var i=0; i<len; i++) {
            var start_pos = {}, end_pos = {};
            var distance = this.data[i];
            start_pos.x = this.x + Math.sin(this.initAngle)*this.radius;
            start_pos.y = this.y + Math.cos(this.initAngle)*this.radius;
            end_pos.x = this.x + Math.sin(this.initAngle)*(this.radius+distance);
            end_pos.y = this.y + Math.cos(this.initAngle)*(this.radius+distance);

            ctx.beginPath();
            ctx.moveTo(start_pos.x, start_pos.y);
            ctx.lineTo(end_pos.x, end_pos.y);
            ctx.stroke();

            this.initAngle += deleta;
        }
    }
    ctx.restore();
}