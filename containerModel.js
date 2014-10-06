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

Container.prototype.addBox = function(widthCoordinate, heightCoordinate, width, height){
  var boxID = ++this.boxCount;
  for(var w = widthCoordinate; w < widthCoordinate + width; w++){
    for(var h = heightCoordinate; h < heightCoordinate + height; h++){
      this.fillCoordinate(w, h, boxID);
    }
  }
}

Container.prototype.removeBox = function(){
  if(this.boxCount) this.boxCount -= 1;
}

Container.prototype.isOccupied = function(widthCoordinate, heightCoordinate){
  return !!this.grid[heightCoordinate][widthCoordinate];
}

Container.prototype.fillCoordinate = function(widthCoordinate, heightCoordinate, value){
  this.grid[heightCoordinate][widthCoordinate] = value || true;
}

function makeGrid(width, height){
  var grid = [];
  for(var i = 0; i < height; i++){
    grid[i] = new Array(width);
  }
  return grid;
}
