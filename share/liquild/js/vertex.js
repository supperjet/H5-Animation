//顶点类
function Vertex(x,y,baseY){
		this.baseY = baseY;
		this.x = x;
		this.y = y;
		this.vy = 0;
		this.targetY = 0;
		this.friction = 0.15;
		this.deceleration = 0.95;
	}
		
Vertex.prototype.updateY = function(diffVal){
		this.targetY = diffVal + this.baseY;
		this.vy += (this.targetY - this.y);
		this.vy *= this.deceleration;
		this.y += this.vy * this.friction;
	}
