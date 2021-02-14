jQuery(function ($) {

//declare hero slider 
  $('.HeroSlider').owlCarousel({
    autoplay: true,
    loop: false,
    nav: true,
    items: 1,
    rtl:true,
    dotsContainer: '.sliderDots',
  });
// declare slider on tabs
  $('.tabCarusel').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 15,
    nav: true,
    rtl:true,
    responsive: {
      0: {
        items: 1,
        nav: true,

      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,

      }
      

    }
  });
/************** script for quantity increment and decrement ******* */
  function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});
/***************************************** */
// code for work slider on modal
$('.modal').on('shown.bs.modal', function (e) {
  //declare slider on modal with small thumbs
  $('.slider-for').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
asNavFor: '.slider-nav',
rtl: true

});
$('.slider-nav').slick({
slidesToShow: 3,
slidesToScroll: 1,
asNavFor: '.slider-for',
dots: true,
centerMode: true,
focusOnSelect: true,
rtl: true,
responsive:{
slidesToShow: 3
}

});
})

});

