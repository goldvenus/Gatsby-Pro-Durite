import React from 'react'
import Helmet from 'react-helmet'

import Slider from 'react-slick'
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

           'https://mediacdn.durite.us/shower/Custom+Shower+Panel+Without+Curb.jpg',

           'https://mediacdn.durite.us/shower/SHOWER+BASIN.JPG',

           'https://mediacdn.durite.us/shower/Shower+Basin+Install.jpg',

           'https://mediacdn.durite.us/shower/Shower+Basin+With+Raised+Edge.JPG',

          'https://mediacdn.durite.us/shower/Shower+Basin+with+raised+edges.JPG',

           'https://mediacdn.durite.us/shower/Shower+Panel+block+for+Glass+Insert.jpg',

            'https://mediacdn.durite.us/shower/Shower+on+hidden+drainage.JPG'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Shower Pan/Basins`}/>
                    <div className="pageHeader">
                        <h2>Shower Pan/Basins</h2>
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
                                    Shower Pan/ Shower Basin: Manufacturing
                                </u></h2>

                                <p>
                                    Durite has <b className="accentText">“Manufactured”</b> many shower basins through the years. <b className="accentText">“Fabrication”</b> of shower basins with glue joints are not recommended and we don’t offer it. Shower Basins are almost like a bath tub where it has to retain water and prevent leak from all sides.
                                </p>
                                <p>Most of our Shower Basin are made from (Epoxy) with Stones/Glass, and Shells similar to “Terrazzo”, “Quartz” and “Concrete Polymer” (looks like concrete but in Polymer). </p>

                                <p> Shower Basins must not, “Stain” (in an environment of hair coloring and shampoo), it must not “Crack”  (unlike  cement/concrete  materials  that  has  shrinkage  cracks  and  eventually allows  water  to  the  underside  for  porosity.  Epoxy  Basin  does  not  crack,  and  its  none-porous).  Shower basin must also be very “light weight” for ease of install (normally shower foot-print is small and if the basin is heavy, it would be difficult for one person to install).
                                </p>
                                <p>Probably  the  most  advantage  that  a  Polymer  Shower  Basin  can  offer  is a complete  water tight and prevention of water leakage. <b className="accentText"><i>“Lead Pan” that is customary to be installed under the shower  pan, would not be necessary. </i></b>unless the  design would want  to create a  double safety in the event of gasket or other failures that can cause a leak.
                                </p>

                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={12} lg={12}>
                                <h2><u>
                                    Shower Basin Design:
                                </u></h2>

                                <p>
                                    As  mentioned,  Durite  has  been  involved  in  Fabrication  of  many  Shower  Basins.  Some include  wall  paneling  with  same  materials,  or  different materials.  Some  Basin’s  can  have attached  walls  (fusing  is  a  technique  that  pieces  can  be shipped  and  with  chemical  heat welded  into  becoming  one  piece).  Some  shower  basins  require  an  up-turned  edge  to  be inserted  in  the  walls.  Some  Basin’s  require “ADA”  usually “Curb-less”.   It  is  becoming more  customary  to  use  Shower  Basins  without  any  curbs.  We  have  produced  many  curb-less  shower  pans.  the  key  to  this  design  is  to  set  the  drain at  the  furthest  corner  (trough drain)  and  allow  the  basin  to  have  a  reservoir  of  5  gallons/  minute  drain.  (meaning  that  if the shower  is  on  for 1  minute  and 5 gallons  of water could not  drain,  water  can  sits  in the Basin  reservoir,  and  does  not  spill  over  into  the  interior).  The  gentle  slope  that  has  to  be created from the shower’s entrance to the drain must allow for this “volume” of water.
                                </p>
                                <p>In  addition  to “curb-less”  shower  pans  we  have  also  created  a  U-Channel “slot”  inside  the edge of the shower pan where glass walls can be inserted inside, separating the shower from the  room  or  from  the  bathtub  area.    We  have  made  this  floor  slot  either  with  a  U-shaped Aluminum channel inserted, or to create a slot with the same material as the Shower Basin.
                                </p>
                                <p>As you can see, design can be limitless and versatile.  Trough drain with cover that matches the shower basin is becoming a more common feature.
                                </p>
                                <p>
                                    Durite has also constructed exotic series of shower pans.  Currently under design we have a “Glow  in  the  Dark”  (blue  hue)  shower  basin.    we have  also  previously  constructed  shower basins  in  semi-precious  stones  (jade  pebbles),  turquoise, lapis,  jasper,  etc.  lime  stone  look with sea shells or fossils a truly “WOW” factor. Concrete Polymer is highly demanded (it is attractive,  simple  and  very  practical)  can  be  produced  in  white,  none  staining  and  none-cracking making it a notch above all others. From creation of material, to shapes, geometry and designs the possibilities are endless.
                                </p>

                                <p>
                                <b className="accentText">Let us know what you have in mind?</b>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <MainFooter/>
            </Layout>
          )
        }
      }
