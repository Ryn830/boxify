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

