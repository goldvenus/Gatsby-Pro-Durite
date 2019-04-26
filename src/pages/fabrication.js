import React from 'react'
import Helmet from 'react-helmet'
import '../css/master.scss'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Lightbox from 'react-images'
import FA from 'react-fontawesome'
import MainFooter from "../components/footer";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slideshow_image from "../components/slidershow_image"

export default class ReactComponent extends React.Component {
    constructor(props) {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.gotoImage = this.gotoImage.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
    }
    openLightbox() {
        this.setState({currentImage: 0, lightboxIsOpen: true});
    }
    closeLightbox() {
        this.setState({currentImage: 0, lightboxIsOpen: false});
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }
    gotoImage(index) {
        this.setState({currentImage: index});
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1)
            return;

        this.gotoNext();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive:[{ breakpoint: 768, settings: { slidesToShow: 1 } }]
        };
        const IMAGES = [

            '//d2q3s7l8p2303e.cloudfront.net/Fabrication/Kitchen+Counter+Calicatta.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/Fabrication/Kitchen+Counter.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/Fabrication/Kitchen+Island+Panels+being+Assembled+.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/Fabrication/Table+Top+Fabrication.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/Fabrication/Kitchen+Counter+%26+Sink+Same+Material.JPG'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Fabrication`}/>
                    <div className="pageHeader">
                        <h2>Fabrication</h2>
                        <hr style={{
                            background: "#FF2023",
                            height: 5,
                            width: 150
                        }}/>
                    </div>
                    <div className="slideShowSection">
                        <div className="slideShow">
                          <Slideshow_image sliderimage = {IMAGES}/>
                            <Lightbox currentImage={this.state.currentImage} images={IMAGES.map(({src}) => ({src: src}))} isOpen={this.state.lightboxIsOpen} onClickPrev={this.gotoPrevious} onClickNext={this.gotoNext} onClose={this.closeLightbox} backdropClosesModal={true} />
                            <button className="viewGalleryButton" onClick={this.openLightbox}><h4>View Gallery <FA name='picture-o' /></h4></button>

                        </div>
                        <div className="slideShowBottom">
                        <a href="#bodyText" className="readTextButton">Read more <FA name="arrow-circle-down"/></a>
                        </div>
                    </div>

                </div>

                <section className="textSection" id="bodyText">
                    <Container>
                        <Row className="show-grid">
                            <Col xs={12} md={12} lg={12}>
                                <h2><u>
                                    Fabrication: From Finish Slabs
                                </u></h2>

                                <p>
                                    Our  definition  of  Fabrication  is  to  take  stone  slabs  and man-made  materials such  as  CaesarStone  ®,  SileStone@,  Zodiac@,  Cambria®,  Corian®  etc.    and process for a desired product. Fabrication is to cut pieces and glue them on a 45 degree miter joints.
                                </p>

                                <p>For  man-made  materials  we  have  the  ability  to  curve  and  create  desired shapes,  achieve  incredible  finish’s  that  looks  seamlesslike  one  piece  where joints almost disappear. Counter  Tops,  Backsplash,  and many other products can be Fabricated from slabs to achieve the desired finish.   </p>

                                <h2><u>Cost of Fabrication: </u></h2>
                                <p>Most   materials   for   Fabrication   are   provided   to   us   in   a   slab   format.   this eliminates the guessing game and reduces the chance of returns.  Also various materials can range in cost. Some suppliers because of their ability to buy bulk can  obtain  a  more  favorable  terms  than  others.   Some  Trademark  materials only sell to their own suppliers. In Fabrication Durite  only gets involved with processing the finish slabs into the final products. </p>
                                <p>Time  of  fabrication  or  the "turn-around"  time  is  an    important  cost  factor. depending  on  size  and  magnitude  of  the  project,  fabrication  can  be  done  in one or three shifts (round the clock).   </p>
                                <p>Ordering can be made in  pieces, so it would be easy to install and assemble on site  (miter  joints)  with  numbered  pieces.  or  fabricated  pieces can  be  pre-assembled and shipped as whole units. Crating, Shipping and Insurance are all part of the final cost.     </p>

                            </Col>
                        </Row>

                    </Container>
                </section>
                <MainFooter/>
            </Layout>
          )
        }
      }
