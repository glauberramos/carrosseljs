carrosseljs.main = function() {
  var slidesController = new carrosseljs.SlidesController(7, 250);

  function autoSlide() {
    var position = document.getElementById('carrossel-list').style.left;
    var nextPosition;
    var numberedPosition = position.substring(0, position.length - 2);

    if(numberedPosition != slidesController.getLastPositionViewPort()) {
      nextPosition = numberedPosition - 1;
    } else {
      nextPosition = '0';
    }
    document.getElementById('carrossel-list').style.left = nextPosition + 'px';
  }

  window.onload = function() {
      var setIntervalId = window.setInterval(autoSlide, 10);

      document.getElementsByClassName('left')[0].onclick = function() {
        clearInterval(setIntervalId);
        slidesController.next();

        document.getElementById('carrossel-list').style.left = slidesController.currentPosition() + 'px';
      };

      document.getElementsByClassName('right')[0].onclick = function() {
        clearInterval(setIntervalId);
        slidesController.next();

        document.getElementById('carrossel-list').style.left = slidesController.currentPosition() + 'px';
      }   
  }
}();
