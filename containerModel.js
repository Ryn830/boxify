var Container = function(width, height){
  this.width = width;
  this.height = height;
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
}

Container.prototype.addBox = function(){
}

Container.prototype.isOccupied = function(){
}

Container.prototype.fillCoordinate = function(){
}
