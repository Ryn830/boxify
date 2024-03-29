describe('the container', function(){

  var container;
  beforeEach(function(){
    container = new Container(4,4);
  });

  it('should contain a getWidth method', function(){
    expect(typeof container.getWidth).toBe("function");
  });

  it('should contain a getHeight method', function(){
    expect(typeof container.getHeight).toBe("function");
  });

  it('should contain a getArea method', function(){
    expect(typeof container.getArea).toBe("function");
  });

  it('should contain a getBoxCount method', function(){
    expect(typeof container.getBoxCount).toBe("function");
  });

  it('should contain a addBox method', function(){
    expect(typeof container.addBox).toBe("function");
  });

  it('should contain a removeBox method', function(){
    expect(typeof container.removeBox).toBe("function");
  });

  it('should contain an isOccupied method', function(){
    expect(typeof container.isOccupied).toBe("function");
  });

  it('should contain a fillCoordinate method', function(){
    expect(typeof container.fillCoordinate).toBe("function");
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

describe('box addition and removal', function(){
  var container;
  beforeEach(function(){
    container = new Container(4,6);
  });

  it('should add a box to a given coordinate', function(){
    container.addBox(2, 2, 1, 1);
    expect(!!container.isOccupied(2, 2)).toBe(true);
    expect(!!container.isOccupied(3, 2)).toBe(false);
    expect(!!container.isOccupied(2, 3)).toBe(false);
  });

  it('should be able to add rectangular boxes', function(){
    container.addBox(0, 0, 1, 3);
    expect(!!container.isOccupied(0, 0)).toBe(true);
    expect(!!container.isOccupied(0, 1)).toBe(true);
    expect(!!container.isOccupied(0, 2)).toBe(true);
    expect(!!container.isOccupied(0, 3)).toBe(false);
    expect(!!container.isOccupied(1, 0)).toBe(false);
  });
});

describe("the container's awareness of it's contents", function(){
  var container;
  beforeEach(function(){
    container = new Container(4, 6);
  });

  it('should increment boxCount when adding a box', function(){
    container.addBox();
    expect(container.getBoxCount()).toEqual(1);
  });

  it('should decrement boxCount when removing a box', function(){
    container.addBox();
    container.removeBox();
    expect(container.getBoxCount()).toEqual(0);
  });

  it('should return the box id of a filled space', function(){
    container.addBox(0, 0, 1, 1);
    container.addBox(0, 1, 2, 2);
    expect(container.isOccupied(0, 0)).toEqual(1);
    expect(container.isOccupied(0, 1)).toEqual(2);
    expect(container.isOccupied(1, 2)).toEqual(2);
  });

  it('should return false when a space is not filled', function(){
    container.fillCoordinate(2,2);
    expect(container.isOccupied(0,0)).toBe(false);
    expect(container.isOccupied(3,5)).toBe(false);
  });
});
