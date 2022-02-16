const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  arrows: true,
  slidesToShow: 10,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false
      }
    }
  ]
};

export default sliderSettings;