import React from 'react';
import Slider from 'react-slick'
import PropTypes from "prop-types"
const properties = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive:[{ breakpoint: 768, settings: { slidesToShow: 1 } }]
}

const Slideshow_image = (props) => {
  const images = props.sliderimage;
  return (
    <Slider {...properties}>
      {
        images.map((image, index) => {
          return slideritem(image);
        })
      }

    </Slider>
  )
}
const slideritem = (slideImage) =>{
  return (
    <div className="each-slide" style={{'height' : '200px'}}>
      <div  className="slide_background" style={{'backgroundImage': `url(${slideImage})`}}/>
    </div>
  );

}
Slideshow_image.propTypes = {
  sliderimage: PropTypes.array,
}

Slideshow_image.defaultProps = {
  siteTitle: [],
}

export default Slideshow_image;