##Chapter5  Important formulas in this chapter


######1.Convert angular velocity to x, y velocity
vx = speed * Math.cos(angle);
vy = speed * Math.sin(angle);

######2.Convert angular acceleration (any force acting on object) to x, y acceleration
ax = force * Math.cos(angle);
ay = force * Math.xin(angle);

######3.Add acceleration to velocity
vx += ax;
vx += ay;

######4.Add velocity to position
object.x += vx;
object.y += vy;