$(document).on('ready', function() {
    
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
  }); 
    
  $(".catalog-list").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true
  });
    
  $(".slider-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1      
  });    
    
  $(".brand-list").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true
      
  });
});