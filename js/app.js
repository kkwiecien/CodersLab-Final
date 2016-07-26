$(function() {

  function navScroll() {
    var $navButton = $('#menuBar a');
    $navButton.click(function(event){
      event.preventDefault();
      var $this = $(this);
      var targetItem = $this.attr('href');
      var targetPosition = $(targetItem).offset().top - 57;
      $('html, body').animate({scrollTop: targetPosition}, 0);
    })
  }

  function galleryDisplay() {
  }

  function galleryScroll() {
    var $galleryLeftButton = $('#artGallery .fa-caret-square-o-left');
    var $galleryRightButton = $('#artGallery .fa-caret-square-o-right');
    $galleryLeftButton.click(function(event){
      console.log('a');
    });
    $galleryRightButton.click(function(event){
      console.log('b');
    });
  }

  function hobbyDisplay() {
  }

  function hobbyScroll() {
    var $hobbyLeftButton = $('#hobbyGallery .fa-caret-square-o-left');
    var $hobbyRightButton = $('#hobbyGallery .fa-caret-square-o-right');
    var index = 0;
    $hobbyLeftButton.click(function(event){
      var sliderLength = $(this).parent().find('div.imageFrame').find('ul').find('li').length;
      index++;
      if (index > sliderLength-1) {console.log('1');
        index=0;
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: '0'
        });
      } else {console.log('2');
        var current_left=$(this).parent().find('div.imageFrame').find('ul').css('left');
        console.log(current_left);
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: (parseInt(current_left) - 50) + 'px'
        });
      }
      // $(this).parent().find('div.imageFrame').find('ul').css('left');
    });
    $hobbyRightButton.click(function(event){
      console.log('y');
    });
  }

  navScroll();
  // galleryDisplay();
  galleryScroll();
  // hobbyDisplay();
  hobbyScroll();

});
