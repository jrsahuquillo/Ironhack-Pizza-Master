// Write your Pizza Builder JavaScript in this file.
$('.btn-pepperonni').on('click', function(){
  $('[class^=pep]').toggle();
  $('.btn-pepperonni').toggleClass('active');
  //deactivate('.btn-pepperonni');
});

function deactivate(selector){
  $(selector).toggleClass('active');

}

$('.btn-mushrooms').on('click', function(){
  $('.cap, .stem').toggle();
  $('.btn-mushrooms').toggleClass('active');
});

$('.btn-green-peppers').on('click', function(){
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
});

$(document).on('ready', function(){
  $('.sauce').hide();
});

$('.btn-sauce').on('click', function(){
  $('.sauce-white').toggle();
  $('.btn-sauce').toggleClass('active');
});


$('.btn-crust').on('click', function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  // if ($('.crust').hasClass('crust-gluten-free')) {
  //     $('.crust').removeClass('crust-gluten-free');
  // }
});
