carrosseljs = {}

carrosseljs.SlidesController = function(imageCount, imageWidth) {
  //private api
  var self;
  var imageCount = imageCount;
  var imageWidth = imageWidth;
  var padding = 2;
  var currentPosition = 0;
  var viewPortImagesNumber = 3;
  var currentFirstImageOnViewPort = 1;

  //public api
  self = {
    imageCount: imageCount,
    imageWidth: imageWidth,
    currentPosition: function() {
      var sum = (currentFirstImageOnViewPort - 1) * (padding + imageWidth);
      //images are css left oriented
      return - sum;
    },
    currentFirstImageOnViewPort: function() {
      return currentFirstImageOnViewPort;
    },
    getLastPositionViewPort: function() {
      return - (imageCount - viewPortImagesNumber) * (padding + imageWidth);
    },
    next: function() {
      if(currentFirstImageOnViewPort + viewPortImagesNumber -1 < imageCount) {
        currentFirstImageOnViewPort = currentFirstImageOnViewPort + 1;
      } else {
        currentFirstImageOnViewPort = 1;
      }
    },
    previous: function() {
      if(currentFirstImageOnViewPort - 1 > 1) {
        currentFirstImageOnViewPort = currentFirstImageOnViewPort - 1;
      } else {
        currentFirstImageOnViewPort = imageCount - viewPortImagesNumber + 1;
      }
    }
  }

  return self;
}
