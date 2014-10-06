var Container = function(width, height){
  this.width = width;
  this.height = height;
  this.boxCount = 0;
}

Container.prototype.getWidth = function(){
  return this.width;
}

Container.prototype.getHeight = function(){
  return this.height;
}

Container.prototype.getArea = function(){
  return this.getWidth() * this.getHeight();
}

Container.prototype.getBoxCount = function(){
  return this.boxCount;
}

Container.prototype.addBox = function(){
  this.boxCount += 1;
}

Container.prototype.removeBox = function(){
  if(this.boxCount) this.boxCount -= 1;
}

Container.prototype.isOccupied = function(){
}

Container.prototype.fillCoordinate = function(){
}
