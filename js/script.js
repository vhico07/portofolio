// event link
$('.page-scroll').on('click', function(e){
	
	// ambil link
	var tujuan = $(this).attr('href');
	
	// tangkap elemen 
    var elemenTujuan = $(tujuan);

    // scrolling
    $('html,body').animate({
    	scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing');

    e.preventDefault();
});


// menyimpan parallax
// about
$(window).on('load', function() {
    $('.p1').addClass('pMuncul');
    $('.p2').addClass('pMuncul');
});

$(window).scroll(function() {
     var wScroll = $(this).scrollTop();

     $('.jumbotron img').css({
         'transfrom' : 'translate(0px, '+ wScroll/4 +'%)'
     });

     $('.jumbotron h1').css({
         'transfrom' : 'translate(0px, '+ wScroll/2 +'%)'
     });

     $('.jumbotron p').css({
         'transfrom' : 'translate(0px, '+ wScroll/1.2 +'%)'
     });


// untuk portofolio
   if(wScroll > $('.portofolio').offset().top - 250 ) {
      $('.portofolio .thumbnail').each(function(i) {
          setTimeout(function() {
              $('.portofolio .thumbnail').eq(i).addClass('muncul');
          }, 300 * (i+1));
      });

  
   }
});