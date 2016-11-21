// Write your Pizza Builder JavaScript in this file.

var total = 21;
$('strong').text("$" + total);
$('.btn-pepperonni').on('click', function(){
  $('[class^=pep]').toggle();
  $('.btn-pepperonni').toggleClass('active');
  //deactivate('.btn-pepperonni');
  if ($('.btn-pepperonni').hasClass('active')){
      $('strong').text("$" + (total +=1));
    } else {
      $('strong').text("$" + (total -=1));
    }
});

function deactivate(selector){
  $(selector).toggleClass('active');

}

$('.btn-mushrooms').on('click', function(){
  $('.cap, .stem').toggle();
  $('.btn-mushrooms').toggleClass('active');
  if ($('.btn-mushrooms').hasClass('active')){
      $('strong').text("$" + (total +=1));
    } else {
      $('strong').text("$" + (total -=1));
    }
});

$('.btn-green-peppers').on('click', function(){
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  if ($('.btn-green-peppers').hasClass('active')){
      $('strong').text("$" + (total +=1));
    } else {
      $('strong').text("$" + (total -=1));
    }
});

$(document).on('ready', function(){
  $('.sauce').show();
});

$('.btn-sauce').on('click', function(){
  $('.sauce-white').toggle();
  $('.btn-sauce').toggleClass('active');
  if ($('.btn-sauce').hasClass('active')){
      $('strong').text("$" + (total +=3));
    } else {
      $('strong').text("$" + (total -=3));
    }
});


$('.btn-crust').on('click', function(){
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');
  // if ($('.crust').hasClass('crust-gluten-free')) {
  //     $('.crust').removeClass('crust-gluten-free');
  // }
  if ($('.btn-crust').hasClass('active')){
      $('strong').text("$" + (total +=5));
    } else {
      $('strong').text("$" + (total -=5));
    }
});
