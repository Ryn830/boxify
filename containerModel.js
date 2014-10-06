var Container = function(width, height){
  this.width = width;
  this.height = height;
  this.boxCount = 0;
  this.grid = makeGrid(width, height);
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

Container.prototype.isOccupied = function(widthCoordinate, heightCoordinate){
  return !!this.grid[heightCoordinate][widthCoordinate];
}

Container.prototype.fillCoordinate = function(widthCoordinate, heightCoordinate){
  this.grid[heightCoordinate][widthCoordinate] = true;
}

function makeGrid(width, height){
  var grid = [];
  for(var i = 0; i < height; i++){
    grid[i] = new Array(width);
  }
  return grid;
}
