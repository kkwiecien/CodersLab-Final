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
    var $galleryLeftButton = $('#artGallery .sliderButtonLeft');
    var $galleryRightButton = $('#artGallery .sliderButtonRight');
    var index = 0;
    $galleryLeftButton.click(function(event){
      var sliderLength = $(this).parent().find('div.imageFrame').find('ul').find('li').length;
      index++;
      if (index > sliderLength-1) {
        index = 0;
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: '0'
        });
      } else {
        var current_left=$(this).parent().find('div.imageFrame').find('ul').css('left');
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: (parseInt(current_left) - 50) + 'px'
        });
      }
    });
    $galleryRightButton.click(function(event){
      var sliderLength = $(this).parent().find('div.imageFrame').find('ul').find('li').length;
      index--;
      if (index < 0) {
        index = sliderLength-1;
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: '-' + ((sliderLength-1)*50) + 'px'
        });
      } else {
        var current_left=$(this).parent().find('div.imageFrame').find('ul').css('left');
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: (parseInt(current_left) + 50) + 'px'
        });
      }
    });
  }

  function hobbyDisplay() {
  }

  function hobbyScroll() {
    var $hobbyLeftButton = $('#hobbyGallery .sliderButtonLeft');
    var $hobbyRightButton = $('#hobbyGallery .sliderButtonRight');
    var index = 0;
    $hobbyLeftButton.click(function(event){
      var sliderLength = $(this).parent().find('div.imageFrame').find('ul').find('li').length;
      index++;
      if (index > sliderLength-1) {
        index = 0;
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: '0'
        });
      } else {
        var current_left=$(this).parent().find('div.imageFrame').find('ul').css('left');
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: (parseInt(current_left) - 50) + 'px'
        });
      }
    });
    $hobbyRightButton.click(function(event){
      var sliderLength = $(this).parent().find('div.imageFrame').find('ul').find('li').length;
      index--;
      if (index < 0) {
        index = sliderLength-1;
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: '-' + ((sliderLength-1)*50) + 'px'
        });
      } else {
        var current_left=$(this).parent().find('div.imageFrame').find('ul').css('left');
        $(this).parent().find('div.imageFrame').find('ul').css({
          left: (parseInt(current_left) + 50) + 'px'
        });
      }
    });
  }

  navScroll();
  // galleryDisplay();
  galleryScroll();
  // hobbyDisplay();
  hobbyScroll();

});
