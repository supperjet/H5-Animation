function Atom(opt) {
    this.x = opt.x || 0;
    this.y = opt.y || 0;
    this.text = opt.text || '测试文本测试文本测试';
    this.textColor = opt.textColor || '#ffffff';
    this.bgColor = opt.bgColor || 'rgba(255,255,255, 0.4)'
    this.speed = opt.speed || 1;
    this.ratio = opt.ratio || 1;
    this.fontSize = opt.fontSize || 35;
    this.scaleX = this.scaleY = this.ratio * 1;
    this.padding = opt.padding || this.fontSize;
    this.isNeedBg = opt.isNeedBg;
    this.width = 0;
}

Atom.prototype.draw = function(ctx) {
    ctx.font = this.fontSize + 'px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    
    var height = this.fontSize + this.padding;
    var width = ctx.measureText(this.text).width + this.padding;
    var radius = height/2;

    this.width = width + radius*2;
    
    if(this.isNeedBg) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, this.scaleY);
        ctx.fillStyle = this.bgColor;
        ctx.moveTo(this.x, this.y+this.radius);
        ctx.arc(this.x, this.y+radius, radius, 0, Math.PI*2);
        ctx.moveTo(this.x+width, this.y+this.radius);
        ctx.arc(this.x+width, this.y+radius, radius, 0, Math.PI*2);
        ctx.moveTo(this.x, this.y);
        ctx.rect(this.x, this.y, width, height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scaleX, this.scaleY);
    ctx.fillStyle = this.textColor;
    ctx.beginPath();
    ctx.fillText(this.text, this.x+this.padding/2, this.y+this.fontSize+this.padding/2)
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

