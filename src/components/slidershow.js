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
        <div  className="slide_background" style={{'backgroundImage': `url(${slideImages[0]})`}}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div className="slide_background" style={{'backgroundImage': `url(${slideImages[1]})`}}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide">
        <div className="slide_background" style={{'backgroundImage': `url(${slideImages[2]})`}}>
          <span>Slide 3</span>
        </div>
      </div>
      <div className="each-slide">
        <div className="slide_background" style={{'backgroundImage': `url(${slideImages[3]})`}}>
          <span>Slide 4</span>
        </div>
      </div>
      <div className="each-slide">
        <div  className="slide_background" style={{'backgroundImage': `url(${slideImages[4]})`}}>
          <span>Slide 5</span>
        </div>
      </div>

    </Slide>
  )
}
export default Slideshow;