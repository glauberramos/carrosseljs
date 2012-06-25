carrosseljs.main = function() {
  var slidesController = new carrosseljs.SlidesController(7, 250);
  var resetIntervalId;

  function autoSlide() {
    var position = document.getElementById('carrossel-list').style.left;
    var numberedPosition = position.substring(0, position.length - 2);
    var nextPosition;

    if(numberedPosition != slidesController.getLastPositionViewPort()) {
      nextPosition = numberedPosition - 1;
    } else {
      resetIntervalId = window.setInterval(smoothlyReset, 1);
    }
    
    document.getElementById('carrossel-list').style.left = nextPosition + 'px';
  };

  function smoothlyReset() {
    var position = document.getElementById('carrossel-list').style.left;
    var numberedPosition = position.substring(0, position.length - 2);
    var nextPosition;

    if(numberedPosition < 0) {
      nextPosition = parseFloat(numberedPosition) + 10;
    } else {
      clearInterval(resetIntervalId);
      nextPosition = '0';
    }

    document.getElementById('carrossel-list').style.left = nextPosition + 'px';
  };

  window.onload = function() {
      var setIntervalId = window.setInterval(autoSlide, 10);

      document.getElementsByClassName('left')[0].onclick = function() {
        clearInterval(setIntervalId);
        slidesController.previous();

        document.getElementById('carrossel-list').style.left = slidesController.currentPosition() + 'px';
      };

      document.getElementsByClassName('right')[0].onclick = function() {
        clearInterval(setIntervalId);
        slidesController.next();

        document.getElementById('carrossel-list').style.left = slidesController.currentPosition() + 'px';
      }   
  }
}();
