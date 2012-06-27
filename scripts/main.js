carrosseljs.main = function() {
  var slidesController = new carrosseljs.SlidesController(7, 350);

  function autoSlide() {
    var position = document.getElementById('carrossel-list').style.left;
    var numberedPosition = position.substring(0, position.length - 2);
    var nextPosition = numberedPosition - 1;

    if(numberedPosition <= slidesController.getLastPositionViewPort()) {
      window.setTimeout(smoothlyReset, 1);
    }
    
    document.getElementById('carrossel-list').style.left = nextPosition + 'px';
  };
  
  function smoothlyReset() {
    var position = document.getElementById('carrossel-list').style.left;
    var newPosition = parseFloat(position.substring(0, position.length -2)) + 10;
      
    if(newPosition < -10) {
      document.getElementById('carrossel-list').style.left = newPosition + 'px';
      window.setTimeout(smoothlyReset, 1);
    }
  }

  window.onload = function() {
      var setIntervalId = window.setInterval(autoSlide, 10);

      document.getElementsByClassName('left')[0].onclick = function() {
        clearInterval(setIntervalId);
        slidesController.previous();
        document.getElementById('carrossel-list').style["-webkit-transition"] = 'left 0.5s'
        document.getElementById('carrossel-list').style.left = slidesController.currentPosition() + 'px';
      };

      document.getElementsByClassName('right')[0].onclick = function() {
        clearInterval(setIntervalId);
        slidesController.next();
        document.getElementById('carrossel-list').style["-webkit-transition"] = 'left 0.5s'
        document.getElementById('carrossel-list').style.left = slidesController.currentPosition() + 'px';
      }   
  }
}();
