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
