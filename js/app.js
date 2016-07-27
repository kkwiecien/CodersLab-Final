$(function() {

  function navScroll() {
    var $navButton = $('.navButtons a');
    $navButton.click(function(event){
      event.preventDefault();
      var $this = $(this);
      var targetItem = $this.attr('href');
      var targetPosition = $(targetItem).offset().top - 57;
      $('html, body').animate({scrollTop: targetPosition}, 0);
    })
  }

  function galleryDisplay() {
    var $galleryDisplayButton = $('#artGallery').find('.three.columns').find('.galleryButton');
    var $galleryContent = $('#artGallery').find('.nine.columns').find('p, section');
    $galleryDisplayButton.on('click', function(event){
      event.preventDefault();
      var $this = $(this);
      var show_what=$this.attr('data-type');
      $('#artGallery').find('.nine.columns').find('.active').fadeOut("slow", function(){
        $('#artGallery').find('.nine.columns').find('.active').removeClass('active');
        $galleryContent.parent().find('section.'+show_what).slideDown(1000);
        $galleryContent.parent().find('section.'+show_what).addClass('active');
      });
    });
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
    var $galleryDisplayButton = $('#hobbyGallery').find('.three.columns').find('.hobbyButton');
    var $galleryContent = $('#hobbyGallery').find('.nine.columns').find('p, section');
    $galleryDisplayButton.on('click', function(event){
      var $this = $(this);
      var show_what=$this.attr('data-type');
      $('#hobbyGallery').find('.nine.columns').find('.active').fadeOut("slow", function(){
        $('#hobbyGallery').find('.nine.columns').find('.active').removeClass('active');
        $galleryContent.parent().find('section.'+show_what).slideDown(1000);
        $galleryContent.parent().find('section.'+show_what).addClass('active');
      });
    });
  }

  navScroll();
  galleryDisplay();
  galleryScroll();
  hobbyDisplay();

});
