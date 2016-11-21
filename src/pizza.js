// Write your Pizza Builder JavaScript in this file.

var total = 21;
$('strong').text("$" + total);
$('.btn-pepperonni').on('click', function(){
  $('[class^=pep]').toggle();
  $('.btn-pepperonni').toggleClass('active');
  //deactivate('.btn-pepperonni');
  if ($('.btn-pepperonni').hasClass('active')){
      $('strong').text("$" + (total +=1));
      $("ul > li:contains('pepperonni')").css("display", "list-item");
    } else {
      $('strong').text("$" + (total -=1));
      $("ul > li:contains('pepperonni')").css("display", "none");
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
      $("ul > li:contains('mushrooms')").css("display", "list-item");
    } else {
      $('strong').text("$" + (total -=1));
      $("ul > li:contains('mushrooms')").css("display", "none");
    }
});

$('.btn-green-peppers').on('click', function(){
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  if ($('.btn-green-peppers').hasClass('active')){
      $('strong').text("$" + (total +=1));
      $("ul > li:contains('green peppers')").css("display", "list-item");
    } else {
      $('strong').text("$" + (total -=1));
      $("ul > li:contains('green peppers')").css("display", "none");
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
      $("ul > li:contains('white sauce')").css("display", "list-item");
    } else {
      $('strong').text("$" + (total -=3));
      $("ul > li:contains('white sauce')").css("display", "none");
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
      $("ul > li:contains('gluten-free crust')").css("display", "list-item");
    } else {
      $('strong').text("$" + (total -=5));
      $("ul > li:contains('gluten-free crust')").css("display", "none");
    }
});
