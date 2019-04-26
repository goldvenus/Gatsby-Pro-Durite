import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '//mediacdn.durite.us/Jimmys+Bar+Very+Dark+edite+4-02-02.JPG',
  '//mediacdn.durite.us/Jimmys+Bar.JPG',
  '//mediacdn.durite.us/Noche+Loca.JPG',
  '//mediacdn.durite.us/White+Glass+Composition+Floor.JPG',
  '//mediacdn.durite.us/Coral+looking+at+tank+on+left.JPG',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide" style={{'height' : '400px'}}>
        <div  className="slide_background" style={{'backgroundImage': `url(${slideImages[0]})`}}/>
      </div>
      <div className="each-slide">
        <div className="slide_background" style={{'backgroundImage': `url(${slideImages[1]})`}}/>
      </div>
      <div className="each-slide">
        <div className="slide_background" style={{'backgroundImage': `url(${slideImages[2]})`}}/>
      </div>
      <div className="each-slide">
        <div className="slide_background" style={{'backgroundImage': `url(${slideImages[3]})`}}/>
      </div>
      <div className="each-slide">
        <div  className="slide_background" style={{'backgroundImage': `url(${slideImages[4]})`}}/>
      </div>

    </Slide>
  )
}
export default Slideshow;