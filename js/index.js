$('#fullpage').fullpage({
  anchors: ['home', 'services', 'booking', 'contact'],
  menu: '#navigation',
});

//adding the action to the button
$(document).on('click', '#moveRight', function(){
  $.fn.fullpage.moveSlideRight();
});
