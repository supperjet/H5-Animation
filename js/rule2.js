function Rule(props) {
    this.x = props.x || 0;
    this.y = props.y || 0;
    this.vx = 0;
    this.ax = 0
    this.color = props.color || "#ffffff";
    this.scaleX = props.scaleX || 1;
    this.scaleY = props.scaleY || 1;
    this.markShort = -props.markShort || -5;
    this.markLong = -props.markLong || -10;
    this.textHeight = -props.textHeight || -5;
    this.min = props.min || 1;                       //最小金额
    this.max = props.max || 10000;                   // 最大金额
    this.width = props.width || 1000;                //尺子的宽度
    this.step = props.step || 1000;                  // 步长
    this.seg = Math.floor(this.max / this.step);     // 段数
    this.pxStep = Math.floor(this.width / this.seg); //每段在canvas上的实际宽度
    this.miniPxStep = this.pxStep / 10;              //每个刻度在canvas上的实际像素距离
    this.ratioScale = Math.floor(this.max / this.width);         //比例尺

    this.lineBottom = Object.assign({},{
	        mx: null,
	        my: null,
	        lx: null,
	        ly: null,
	        color:'#fff'
	},props.lineBottom || {});
  
    this.lineRed = Object.assign({},{
	        mx:0,
	        my:0,
	        lx:0,
	        ly:5,
	        color:'red',
	        isDrawRedLine:true
	}, props.lineRed || {});
}

Rule.prototype.draw = function(ctx) {
    var n = 0;                           
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.lineWidth = 1;
    ctx.scale(this.scaleX, this.scaleY);
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.textAlign="center";
    ctx.beginPath();
    for(var i=0 ; i<=this.width; i+=this.miniPxStep) {
        ctx.moveTo(i, 0);
        if(n%10 ===0){
            ctx.lineTo(i, this.markLong);
            if(i===0){
                ctx.fillText(1, i, this.markLong + this.textHeight);
            }else{
                ctx.fillText((n/10) * this.step, i, this.markLong + this.textHeight);
            }
        }else{
            ctx.lineTo(i, this.markShort);
        }
        n++;
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

     // 底部横线
     ctx.save();
     ctx.strokeStyle = this.lineBottom.color;
     ctx.scale(this.scaleX, this.scaleY);
     ctx.beginPath();
     ctx.moveTo(this.lineBottom.mx, this.lineBottom.my);
     ctx.lineTo(this.lineBottom.lx, this.lineBottom.ly);
     ctx.stroke();
     ctx.closePath();
     ctx.restore();

     //中心线
     if(this.lineRed.isDrawRedLine){
        ctx.save();
        ctx.strokeStyle = this.lineRed.color;
        ctx.lineWidth = 1;
        ctx.scale(this.scaleX, this.scaleY);
        ctx.beginPath();
        ctx.moveTo(this.lineRed.mx, this.lineRed.my);
        ctx.lineTo(this.lineRed.lx, this.lineRed.ly);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
}