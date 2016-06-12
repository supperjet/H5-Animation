#chatpter 8 -- easing and spring

#### 1、Simple easing, long form
```
var dx = targetX - object.x,
    dy = targetY - object.y;
    
var vx = dx * easing,
    vy = dy * easing;
    
    object.x += vx;
    object.y += vy;

```
####2、Simple easing, abbreviated form
```
vx = (targetX - object.x) * easing;
vy = (targetY - object.y) * easing;

object.x += vx;
object.y += vy;

```
####3、Simple easing，short form
```
object.x += (targetX - object.x) * easing;
object.y += (targetY - object.y) * easing;

```
####4、Simple spring,long form
```
var ax = (targetX - object.x) * spring;
var ay = (targetY - object.y) * spring;

var vx += ax;
var vy += ay;

vx *= f;
vy *= f;

object.x += vx;
object.y += vy;

```
####5、Simple spring,abbreviated form
```
vx += (targetX - object.x) * spring;
vy += (targetY - object.y) * spring;

vx *= f;
vy *= f;

object.x += vx;
object.y += vy;

```
####6、Simple spring,short form
```
vx += (targetX - object.x) * spring;
vy += (targetY - object.y) * spring;

object.x += (vx*=f);
object.y += (vy*=f);

```
####7、 Offset spring
```
var dx = object.x - fixedX,
    dy = object.y - fixedY;
    angle = Math.atan2(dy, dx);
    targetX = fixed + Math.cos(angle)*springLength,
    targetY = fixed + Math.sin(angle)*springLength;
    
    //spring to targetX, targetY as above

```

