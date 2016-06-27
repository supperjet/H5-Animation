catchBall = {
    intersectionPoint: {x:0, y:0},
    
    isBallInBucket: function () {
        if(lastBallPosition.left === ball.left ||
           lastBallPosition.top === ball.top){
            return;
        }
        
        //(x1, y1) = Last ball position
        //(x2, y2) = Current ball position
        //(x3, y3) = Bucket left
        //(x4, y4) = Bucket right
        
        var x1 = lastBallPosition.left,
            y1 = lastBallPosition.top,
            x2 = ball.left,
            y2 = ball.top,
            x3 = bucket_left + bucket_width/4,
            y3 = bucket_top,
            x4 = bucket_left + bucket_width,
            y4 = y3;
        
        //(x1, y1)到(x2, y2)的斜率
        var k1 = (ball.top - lastBallPosition.top)/(ball.left - lastBallPosition.left);
        
        //(x3, y3)到(x4, y4)的斜率
        var k2 = (y4 - y3) / (x4 - x3);
        
        //截距b1
        var b1 = y1 - k1*x1;
        
        //截距b2
        var b2 = y3 - k2*x3;
        
        this.intersectionPoint.x = (b2 - b1) / (k1 - k2);
        this.intersectionPoint.y = k1 * this.intersectionPoint.x + b1;
        
        return intersectionPoint.x > x3 &&
               intersectionPoint.x < x4 &&
               ball.top + ball.height > y3 &&
               ball.left + ball.width < x4;
        
    }
}