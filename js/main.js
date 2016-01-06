jQuery(document).ready(function(){

  $("div.social-share").mouseenter(function () {
    $(this).find(".share-icons").css("visibility","visible");
  }).mouseleave(function () {
    $(this).find(".share-icons").css("visibility","hidden");
  })

  console.log(menuHeight);


	if (jQuery('#newstimeline').length) {
        jQuery('#newstimeline').slick({
          infinite: false,
          prevArrow: '.btn-down',
          nextArrow: '.btn-up',
          responsive: [
              {
                breakpoint: 2000,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  vertical: true,
                  dots: false
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll:1,
                  infinite:true,
                  vertical:false,
                }
              },
              {
                breakpoint:600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  vertical:false
                }
              }
          ]
      });
    }
});



$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation()
})



  var menuHeight = $('.mega-menu-box .col-md-3').height();

  var menuItemsHeight = $('.mega-menu-items').height();

  if(menuHeight>menuItemsHeight){
    $('.mega-menu-items').addClass('hello');
    console.log(menuItemsHeight);
  }

(function($) {

    // Handle click on toggle search button
    $('#toggle-search').click(function() {
      $('#search-form, #toggle-search').toggleClass('open');
      return false;
    });

    // Handle click on search submit button
    $('#search-form input[type=submit]').click(function() {
      $('#search-form, #toggle-search').toggleClass('open');
      return true;
    });

    // Clicking outside the search form closes it
    $(document).click(function(event) {
      var target = $(event.target);
      
      if (!target.is('#toggle-search') && !target.closest('#search-form').size()) {
        $('#search-form, #toggle-search').removeClass('open');
      }
    });

})(jQuery);