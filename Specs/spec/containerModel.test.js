describe('the container', function(){

  var container;
  beforeEach(function(){
    container = new Container(4,4);
  });

  it('should contain a width method', function(){
    expect(typeof container.getWidth).toBe("function");
  });

  it('should contain a height method', function(){
    expect(typeof container.getHeight).toBe("function");
  });

  it('should contain an area method', function(){
    expect(typeof container.getArea).toBe("function");
  });
});

describe('container dimension methods', function(){
  var container;
  beforeEach(function(){
    container = new Container(4,6);
  });

  it('should get the correct width', function(){
    expect(container.getWidth()).toEqual(4);
  });

  it('should get the correct height', function(){
    expect(container.getHeight()).toEqual(6);
  });

  it('should get the correct area', function(){
    expect(container.getArea()).toEqual(24);
  });
});

describe("the container's boxes", function(){
  var container;
  beforeEach(function(){
    container = new Container(4, 6);
  });

  it('should know when a space is unoccupied', function(){
    expect(container.isOccupied(1,1)).toEqual(false);
    expect(container.isOccupied(4,6)).toEqual(false);
  });
});
