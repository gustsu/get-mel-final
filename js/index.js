$(function(){
  var score = 0;
  $('.mel').each(function(){
    this.onclick = function() {
      score += 1;
      $('.score').text(score);
      $('body').append(this);

      if (score >= 10) {
        $('.win').show();
      }
    }
  });
//   $('.mel').on('click', function(){
//     //$(this).hide();
//     score += 1;
//     $('.score').text(score);
//     $('body').append(this);
    
//     if (score >= 10) {
//       $('.win').show();
//     }
//   });
  $('.again').each(function(){
    this.onclick = function() {
      score = 0;
      $('.score').text(score);
      $('.win').hide();
    }
  });
  // $('.again').on('click', function(){
  //   score = 0;
  //   $('.score').text(score);
  //   $('.win').hide();
  // });
});