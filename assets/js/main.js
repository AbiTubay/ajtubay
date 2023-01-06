$(window).on('resize', function(){
  if ($(window).width() < 950) {
    $('#navbar').addClass('none');
  } else {
    $('#navbar').removeClass('none');
  }
});