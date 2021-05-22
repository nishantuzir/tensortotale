$('.expand-button').on('click', function(){
  $('.comment-section').toggleClass('-expanded');

  if ($('.comment-section').hasClass('-expanded')) {
    $('.expand-button').html('Collapse Comments');
  } else {
    $('.expand-button').html('View Comments');
  }
});
