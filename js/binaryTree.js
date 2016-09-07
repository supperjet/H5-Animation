/*pagram  x, y : 树的坐标*/
/*pagram  angle : 树枝的偏转角度*/
/*pagram  genNum : 树枝的代数*/
/*pagram  branchLength : 树枝的长度*/


function Tree(color, angle, genNum, branchLength){
    this.x = 0;
    this.y = 0;
	this.xpos = 0;
	this.ypos = 0;
    this.zpos = 0
	this.scaleX = 0.85;
	this.scaleY = 0.85;
	this.gen = 0;
    this.alpha = 1;
	this.color = utils.parseColor(color);
	this.angle = (angle === undefined) ? 0.3 : angle;
	this.genNum = (genNum === undefined) ? 6 : genNum;
	this.branchLength = (branchLength === undefined) ? 40 : branchLength;
	
}

Tree.prototype.draw = function(ctx){
	ctx.save()
	ctx.translate(this.x, this.y);
	this.branch(ctx, 0);
	ctx.restore();
}

Tree.prototype.branch= function(ctx, initAngle){
	this.gen++;
	ctx.save();
	ctx.strokeStyle = this.color;
	ctx.rotate(initAngle);
	ctx.scale(this.scaleX, this.scaleY);

	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.translate(0, -this.branchLength);
	ctx.lineTo(0, 0);
	ctx.stroke();

	if(this.gen <= this.genNum){
		this.branch(ctx, this.angle);
		this.branch(ctx, -this.angle);
	}
	ctx.restore();

	this.gen--;
}