###本章重要公式
####1.基于距离的碰撞检测
```
var dx = objectB.x - objectA.x,
	dy = objectB.y - objectA.y;
var distance = Math.sqrt(dx*dx + dy*dy);
if(distance < objectA.radius + objectB.radius){
	//handle collision
}

```
####2.多物体碰撞检测
objects.forEach(function(objectA, i){
	for(var j=i+1; i<objects.lebgth; i++){
    	//handle collision
    }
})