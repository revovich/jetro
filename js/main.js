$(function() {
    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<img src="./img/next.png" alt="" class="slick-next slick-arrow">',
        prevArrow: '<img src="./img/previous.png" alt="" class="slick-prev slick-arrow">',
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        variableWidth: true,
        focusOnSelect: true
    });

});