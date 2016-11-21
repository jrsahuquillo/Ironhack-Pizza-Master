// Write your Pizza Builder JavaScript in this file.

var total = 21;
$('strong').text("$" + total);
$('.btn-pepperonni').on('click', function(){
  $('[class^=pep]').fadeToggle();
  $('.btn-pepperonni').toggleClass('active');
  //deactivate('.btn-pepperonni');
  if ($('.btn-pepperonni').hasClass('active')){
      $('strong').text("$" + (total +=1));
      $("ul > li:contains('pepperonni')").fadeIn(500);
    } else {
      $('strong').text("$" + (total -=1));
      $("ul > li:contains('pepperonni')").fadeOut(500);
    }
});

function deactivate(selector){
  $(selector).toggleClass('active');

}

$('.btn-mushrooms').on('click', function(){
  $('.cap, .stem').fadeToggle();
  $('.btn-mushrooms').toggleClass('active');
  if ($('.btn-mushrooms').hasClass('active')){
      $('strong').text("$" + (total +=1));
      $("ul > li:contains('mushrooms')").fadeIn(500);
    } else {
      $('strong').text("$" + (total -=1));
      $("ul > li:contains('mushrooms')").fadeOut(500);
    }
});

$('.btn-green-peppers').on('click', function(){
  $('.green-pepper').fadeToggle();
  $('.btn-green-peppers').toggleClass('active');
  if ($('.btn-green-peppers').hasClass('active')){
      $('strong').text("$" + (total +=1));
      $("ul > li:contains('green peppers')").fadeIn(500);
    } else {
      $('strong').text("$" + (total -=1));
      $("ul > li:contains('green peppers')").fadeOut(500);
    }
});

$(document).on('ready', function(){
  $('.sauce').show();
});

$('.btn-sauce').on('click', function(){
  $('.sauce-white').fadeToggle();
  $('.btn-sauce').toggleClass('active');
  if ($('.btn-sauce').hasClass('active')){
      $('strong').text("$" + (total +=3));
      $("ul > li:contains('white sauce')").fadeIn(500);
    } else {
      $('strong').text("$" + (total -=3));
      $("ul > li:contains('white sauce')").fadeOut(500);
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
      $("ul > li:contains('gluten-free crust')").fadeIn(500);
    } else {
      $('strong').text("$" + (total -=5));
      $("ul > li:contains('gluten-free crust')").fadeOut(500);
    }
});
