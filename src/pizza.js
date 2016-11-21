// Write your Pizza Builder JavaScript in this file.
$('.btn-pepperonni').on('click', function(){
  $('[class^=pep]').toggle();
});

$('.btn-mushrooms').on('click', function(){
  $('.cap, .stem').toggle();
});

$('.btn-green-peppers').on('click', function(){
  $('.green-pepper').toggle();
});

$(document).on('ready', function(){
  $('.sauce').hide();
});

$('.btn-sauce').on('click', function(){
  $('.sauce-white').toggle();
});


$('.btn-crust').on('click', function(){
  $('.crust').toggleClass('crust-gluten-free');
  // if ($('.crust').hasClass('crust-gluten-free')) {
  //     $('.crust').removeClass('crust-gluten-free');
  // }
});
