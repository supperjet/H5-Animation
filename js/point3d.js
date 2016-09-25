function Point3d(x, y ,z){
    this.x = (x === undefined) ? 0 : x;
    this.y = (y === undefined) ? 0 : y;
    this.z = (z === undefined) ? 0 : z;
    
    this.fl = 250;      //焦距
   
    this.vpX = 0;       //消失点
    this.vpY = 0;
    
    this.cX = 0;        //中心点
    this.cY = 0;
    this.cZ = 0; 
}

Point3d.prototype.setVanishingPoint = function(vpX, vpY){
    this.vpX = vpX;
    this.vpY = vpY;
}

Point3d.prototype.setCenter = function(cX, cY, cZ){
    this.cX = cX;
    this.cY = cY;
    this.cZ = cZ;
}

Point3d.prototype.rotateX = function(angleX){
    var cosX = Math.cos(angleX),
        sinX = Math.sin(angleX),
          y1 = this.y * cosX - this.z * sinX,
          z1 = this.z * cosX + this.y * sinX;
    
      this.y = y1;
      this.z = z1;
}

Point3d.prototype.rotateY = function(angleY){
    var cosY = Math.cos(angleY),
        sinY = Math.sin(angleY),
          x1 = this.x * cosY - this.z * sinY,
          z1 = this.z * cosY + this.x * sinY;
    
      this.x = x1;
      this.z = z1;
}

Point3d.prototype.rotateZ = function(angleZ){
    var cosZ = Math.cos(angleZ),
        sinZ = Math.sin(angleZ),
          x1 = this.x * cosZ - this.y * sinZ,
          y1 = this.y * cosZ + this.x * sinZ;
    
      this.x = x1;
      this.y = y1;
}

Point3d.prototype.getScreenX = function(){
    var scale = this.fl / (this.fl + this.cZ);
    return this.vpX + (this.cX + this.x) * scale;
}

Point3d.prototype.getScreenY = function(){
    var scale = this.fl / (this.fl + this.cZ);
    return this.vpY + (this.cY + this.y) * scale;
}