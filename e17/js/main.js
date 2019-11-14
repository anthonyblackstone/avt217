$( document ).ready(function() {
  console.log('THE DOCUMENT IS READY! DO SOMETHING AWESOME!')

  $('.loz-oot').click(function() {
    $('.number-1').toggleClass('align-left', 'left');
  })

  $('.fallout3').click(function() {
    $('.number-2').slideToggle();
  })

  $('.ff7').click(function() {
    $('.number-3').css('background-color', 'green');
  })

  $('.number-4').click(function() {
    alert("cool, you clicked on this");
  })

  $('.lotro').click(function(){
    
  })
});
