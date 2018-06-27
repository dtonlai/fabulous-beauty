$('#fullpage').fullpage({
  anchors: ['home', 'about', 'services', 'gallery','contact'],
  menu: '#navigation',
});

//adding the action to the button
$(document).on('click', '#moveRight', function(){
  $.fn.fullpage.moveSlideRight();
});
