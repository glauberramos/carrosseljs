carrosseljs.main = function() {
  var slidesController = new carrosseljs.SlidesController(7, 250);

  function autoSlide() {
    var position = document.getElementById('carrossel-list').style.left;
    var nextPosition;

    if(position != '-1008px') {
      nextPosition = position.substring(0, position.length - 2) - 1;
    } else {
      nextPosition = '0';
    }
    document.getElementById('carrossel-list').style.left = nextPosition + 'px';
  }

  window.onload = function() {
      window.setInterval(autoSlide, 10);
  }

}();
