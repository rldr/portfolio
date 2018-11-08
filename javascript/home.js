var onHover = function() {
    $("#footerImg").attr('src', 'images/face2.png');
};

var offHover = function() {
    $("#footerImg").attr('src', 'images/face1.png');
};



var animatePoints = function() {

  var revealPoint = function() {

      $(this).css({
          opacity: 1,
          transform: 'scaleX(1) translateY(0)'
      });

     };

     $.each($('.skill'), revealPoint);

 };

 $(window).load(function() {

   if ($(window).height() > 950) {
         animatePoints();
     }

   var scrollDistance = $('.skills').offset().top - $(window).height() + 200;

   $(window).scroll(function(event) {
     if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
          }
    });

});
