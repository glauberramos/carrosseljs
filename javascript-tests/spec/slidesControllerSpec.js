describe('Slides Controller', function() {	
	var slidesController;
  
  beforeEach(function() {
    slidesController = new carrosseljs.SlidesController(7, 250);
  })
 
  it('should set number of images and image width', function() {
    expect(slidesController.imageCount).toEqual(7);
    expect(slidesController.imageWidth).toEqual(250);
	});

  it('should get next image position', function() {
    slidesController.next();
    expect(slidesController.currentPosition()).toEqual(-252);
  });

  it('should get previous image position', function() {
    slidesController.next();
    expect(slidesController.currentPosition()).toEqual(-252);
    slidesController.next();
    expect(slidesController.currentPosition()).toEqual(-504);
    slidesController.previous();
    expect(slidesController.currentPosition()).toEqual(-252);
  });

  it('should get current first image number on view port', function() {
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(1);
    slidesController.next();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(2);
    slidesController.next();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(3);
    slidesController.previous();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(2);
  });

  it('should get current first image to be 1 if current first image 5 and hit next', function() {
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(1);
    slidesController.next();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(2);
    slidesController.next();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(3);
    slidesController.next();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(4);
    slidesController.next();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(5);
    slidesController.next();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(1);
    slidesController.next();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(2);
    slidesController.next();
  });

  it('should get current first image to be 5 if current first image is 1 and hit previous', function() {
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(1);
    slidesController.previous();
    expect(slidesController.currentFirstImageOnViewPort()).toEqual(5);
  });

  it('should get last position of the view port', function() {
    expect(slidesController.getLastPositionViewPort()).toEqual(-1008);
  });
});
