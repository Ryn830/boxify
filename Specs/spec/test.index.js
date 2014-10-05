describe('the container', function(){

  var container;
  beforeEach(function(){
    container = new Container(4,4);
  });

  it('should contain a height method', function(){
    expect(typeof container.getHeight).toBe("function");
  });

  it('should contain a width method', function(){
    expect(typeof container.getWidth).toBe("function");
  });
});

describe('the box model', function(){
  var box;
  beforeEach(function(){
    box = new Box(1,3);
  });

  it('should have a width', function(){
    expect(box.width).toEqual(1);
  });

  it('should have a height', function(){
    expect(box.height).toEqual(3);
  });
});
