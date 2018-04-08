$(document).ready(function () {               // on document ready
    checkitem();
});

$('.carousel').carousel({
    interval: false,
})

$('#carouselExampleIndicators').on('slid.bs.carousel', checkitem);

function checkitem()                        // check function
{
    var $this = $('#carouselExampleIndicators');
    if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
        // Hide left arrow
        $this.children('.carousel-control-prev').hide();
        // But show right arrow
        $this.children('.carousel-control-next').show();
    } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        // Hide right arrow
        $this.children('.carousel-control-next').hide();
        // But show left arrow
        $this.children('.carousel-control-prev').show();
    } else {
        $this.children('.carousel-control').show();
    }
}
