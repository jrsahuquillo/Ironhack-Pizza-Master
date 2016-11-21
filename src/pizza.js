// Write your Pizza Builder JavaScript in this file.
$(' li:nth-child(1) > button').on('click', function(){
  $('[class^=pep]').toggle();
});

$(' li:nth-child(2) > button').on('click', function(){
  $('.cap, .stem').toggle();
});

$(' li:nth-child(3) > button').on('click', function(){
  $('.green-pepper').toggle();
});
