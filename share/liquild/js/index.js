var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	W = window.innerWidth;
	H = window.innerHeight;

var color1 = "#6ca0f6",
	color2 = "#367aec";

var vertexes = [],    //顶点坐标
	verNum = 250,     //顶点数
	diffPt = [],      //差分值
	autoDiff = 1000;  //初始差分值

	canvas.width = W;
	canvas.height = H;

	var vPos = 125;  //震荡点
	var dd = 15;     //缓冲

	//生成顶点，初始差分值
	for(var i=0; i<verNum; i++){
		vertexes[i] = new Vertex(W/(verNum-1)*i, H/2, H/2);
		diffPt[i] = 0;
	}

	console.log(vertexes);
	//console.log(diffPt);


    //鼠标滚轮
    var wheelHandler = function( e ) {
			var s = ( e.detail ) ? -e.detail : e.wheelDelta;
			s > 0 ? ( dd > 15 ? dd-- :  dd=dd) : ( dd < 50 ? dd++ : dd=dd );

			console.log(dd)
	};

	window.addEventListener('mousewheel', wheelHandler);
    
    //鼠标点击
	canvas.addEventListener('mousedown', function(e){

		var mouse = {x:null, y:null};

		if(e.pageX||e.pageY){
			mouse.x = e.pageX;
			mouse.y = e.pageY;
		}else{
			mouse.x = e.clientX + document.body.scrollLeft +document.documentElement.scrollLeft;
            mouse.y = e.clientY + document.body.scrollTop +document.documentElement.scrollTop;
		}

		//重设差分值
		if(mouse.y>(H/2-50) && mouse.y<(H/2 +50)){
			autoDiff = 1000;
			vPos = 1 + Math.floor((verNum - 2) * mouse.x / W);
			diffPt[vPos] = autoDiff;
		}

		console.log(mouse.x, mouse.y)

	}, false)

	//resize
	function resize(){
		W = window.innerWidth;
	    H = window.innerHeight;
	    canvas.width = W;
	    canvas.height = H;
	}
	window.addEventListener("resize", resize);


	//绘制
	function draw(){
		ctx.save()
		ctx.fillStyle = color1;
		ctx.beginPath();
		ctx.moveTo(0, H);
		ctx.lineTo(vertexes[0].x, vertexes[0].y);
		for(var i=1; i<vertexes.length; i++){
			ctx.lineTo(vertexes[i].x, vertexes[i].y);
		}
		ctx.lineTo(W,H);
		ctx.lineTo(0,H);
		ctx.fill();
		ctx.restore();

		ctx.save();
		ctx.fillStyle = color2;
		ctx.beginPath();
		ctx.moveTo(0, H);
		ctx.lineTo(vertexes[0].x, vertexes[0].y+5);
		for(var i=1; i<vertexes.length; i++){
			ctx.lineTo(vertexes[i].x, vertexes[i].y+5);
		}
		ctx.lineTo(W, H);
		ctx.lineTo(0, H);
		ctx.fill();
		ctx.restore();

		ctx.save();
		ctx.fillStyle="#777";
		ctx.font="12px sans-serif";
		ctx.textBaseline="top";
		ctx.fillText("点 击 液 体 表 面",70,canvas.height/2-20);
		ctx.fillStyle="#fff";
		ctx.fillText("滑 动 滚 轮 改 变 液 体 粘 度",70,canvas.height/2+15);
		ctx.fillText("滚轮改变粘稠度 / Viscosity: "+((dd-15)*20/7).toFixed(2)+"%",W/2.5,canvas.height-20);
		ctx.restore();
	}

	
	//顶点更新
	function update(){
		autoDiff -= autoDiff*0.9;
		diffPt[vPos] = autoDiff;

		//左侧
		for(var i=vPos-1; i>0; i--){
			var d = vPos-i;
			if(d > dd){
				d=dd;
			}
			diffPt[i]-=(diffPt[i] - diffPt[i+1])*(1-0.01*d);
		}
		//右侧
		for(var i=vPos+1; i<verNum; i++){
			var d = i-vPos;
			if(d>dd){
				d=dd;
			}
			diffPt[i] -= (diffPt[i] - diffPt[i-1])*(1-0.01*d);
		}

		//更新Y坐标
		for(var i=0; i<vertexes.length; i++){
			vertexes[i].updateY(diffPt[i]);
		}

	}

	(function drawframe(){
		//更新坐标点
		ctx.clearRect(0, 0, W, H);
		window.requestAnimationFrame(drawframe, canvas);
	    update()
		draw();
	})()

	var blue = function(){
		color1 = "#6ca0f6";
		color2 = "#367aec";
	}
	var black = function(){
		color1 = "#52D681";
		color2 = "#00AD7C";
	}
	
	var purple = function(){
		color1 = "#FF847C";
		color2 = "#E84A5F";
	}

	
