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