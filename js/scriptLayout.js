$(".banner-regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
$(".video-regular").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$(".typical-products-regular").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/icon_back.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../images/icon_right.png'>",
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
// document.getElementById('moar').onclick = function () {
//     var section = document.createElement('section');
//     section.className = 'section--purple wow fadeInDown';
//     this.parentNode.insertBefore(section, this);
// };

$(".n-icon-show").on("click", function(){
    $(".n-icon-show").css({'display': 'none'})
    $(".n-icon-hide").css({'display': 'block'})
})
$(".n-icon-hide").on("click", function(){
    $(".n-icon-show").css({'display': 'block'})
    $(".n-icon-hide").css({'display': 'none'})
})

 var totalItems = $('.carousel-item').length;
 var currentIndex = $('.carousel-item.active').index() + 1;

$('.num').html(''+currentIndex+'/'+totalItems+'');

$('.box-bottom-icon').click(function(){
    currentIndex = $('.carousel-item.active').index() + 1;
    console.log(currentIndex)
    $('.num').html(''+currentIndex+'/'+totalItems+'');
})
