function Tree (color) {
  this.x = 0;
  this.y = 0;
  this.xpos = 0;
  this.ypos = 0;
  this.zpos = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = utils.parseColor(color);
  this.alpha = 1;
  this.lineWidth = 1;
  this.branch = [];
  
  //generate some random branch positions
  this.branch[0] = -140 - Math.random() * 20;
  this.branch[1] = -30 - Math.random() * 30;
  this.branch[2] = Math.random() * 80 - 40;
  this.branch[3] = -100 - Math.random() * 40;
  this.branch[4] = -60 - Math.random() * 40;
  this.branch[5] = Math.random() * 60 - 30;
  this.branch[6] = -110 - Math.random() * 20;
}

Tree.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.strokeStyle = utils.colorToRGB(this.color, this.alpha);
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(0, this.branch[0]);
  context.moveTo(0, this.branch[1]);
  context.lineTo(this.branch[2], this.branch[3]);
  context.moveTo(0, this.branch[4]);
  context.lineTo(this.branch[5], this.branch[6]);
  context.stroke();
  context.restore();
}
