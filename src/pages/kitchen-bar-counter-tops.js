import React from 'react'
import Helmet from 'react-helmet'

import Slider from 'react-slick'
import '../css/master.scss'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
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

            '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Susan+Counter+Top+2.JPG',

            '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Greene+Island+%26+Kitchen+Top.jpg',

                 '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Back+of+Wall+%26+Bar+Top+One+Piece.JPG',

                 '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Citarella+Bar.JPG',

                 '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Example+of+Pebble+panels.jpg',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Fabrication+Table+Top.jpg',

                '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/GRN+Island+Thickness.jpg',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/GRN+Kitchen+Sink%2C+Counter+%26+Black-Splash+One+Piece.jpg',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Gansvourt+Bar+Corner+100\'+length+one+piece.JPG',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Gansvourt+Bar+Section.JPG',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/JFK+Avion+Cafe+Bar+top.jpg',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/JFK+Avion+Cafe+Counter+Top.jpg',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Kitchen+%26+Island.jpg',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Kitchen+Island+Top.JPG',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Kitchen+Walkway.jpg',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Olympia+Tower+Kitchen.JPG',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Radius+one+piece+Oyster+Bar.JPG',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Susan+Counter+Top.JPG',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Susan+Custom+Made+Counter+Top+2+(1).JPG',

              '//mediacdn.durite.us/Kitchen+%26+Bar+Countertops/Zen+Palate+Table+Top.jpg'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Kitchen & Bar Countertops`}/>
                    <div className="pageHeader">
                        <h2>Kitchen & Bar Countertops</h2>
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
                                    Kitchen & Bar Countertops
                                </u></h2>

                                <p>
                                    Durite  is  one  of  the  leading  companies  in  material  design  and  Manufacturing of  counter  tops.  Our  experience  spans  over  30  years  experimenting  with different  manufacturers  of    polymers  and  epoxies  using  additives  for "Food Safety  Environment",  UV  Stabilizers  and  Natural  Pigments  that  are  safe  for food environment.  During the years we gained many valuable lessons that we would like to share with you.
                                </p>

                                <h2><u>Countertop Material Science: </u></h2>
                                <p>A  kitchen  or  bar  top  is  subjected  to  many  types  of  environments.  A  white countertop  would  want  to  stay  white  with UV  (both  from  natural  sun  light  or from  electrical  lights  emitting  UV).  Titanium  DI-Oxide  is  usually  used  for whitening  colors  even  in  toothpaste.  This  is  a  much  stable  pigment  under  an intense UV than chemical color additives that can tint the epoxy white, but it is unstable under UV. Cost of polymers depends on how it is packaged.</p>

                                <p>Another  very  important  feature  is an  Anti-Bacteria  and  Anti-fungal  additives for  food  safety,  Epoxy  by  it’s  own  nature  is  impermeable  and  does  not  allow water/moisture to penetrate where bacteria can grow. It’s important to know what type of materials are added to Epoxy and counter that could absorbs and retain  water,  juices  and  other  food  products  creating  an  environment  for bacteria  growth.  Porous  materials  such  as  Concrete  Counter  Tops  can be prone to bacteria growth. Even though Penetrable Sealers are used to prevent porosity.   Sealers   have  a   certain   short   shelf-life,   they   must   not   have   any carcinogens,  heavy  metals  and  other very  harmful  materials.  Pours materials with  cement  base  and  sealers,  when  they  come  into  contact  with  citric  acid, salts, food preservatives and cleaning agents like Ammonia, Bleach and others can  breakdown  at  the  molecular  level,  or  change  it’s  composition  to  harmful materials.      In   comparison   the   Polymer   industry   R&D   evaluates   a   single material (polymer) by ASTM standards, rather than Concrete Based materials with  Sealers  a  composition  of  two  separate  materials  (concrete &  sealers), creating  an  unknown  composition,  with  many  sealers  not  having  an ASTM evaluations.</p>

                                <p>A  Kitchen  Counter  or  Bar  Top  is  always  subjected  to  Lemon/Lime  Juice,  Salts and Oils. It is also important to know that some materials used in countertops can stain or dissolve when they come into contact with those types of liquids. </p>

                                <p>With  the  popularity  of  the  concrete  look  for  countertops  ,  vanity  and  sinks Durite  was  able  to  create  Concrete  Polymer  that  looks  like  concrete  but functions like Polymer. None-Porous, None-Staining, No sealer needed.</p>

                                <p>Durite  finish  is  natural  without  sealers.  This  process  is  known  as  burnishing. It  is  similar  to  polishing  precious  stones.  By  constant  polishing,  stones  in  the mixture  like <b className="accentText">"Terrazzo"</b>  are  heated  to  a  degree  of  natural  shine.  This  action closes  the  stone  surface  pores  and  eliminates  the  use  of  sealers,  that  can become a maintenance issue.  </p>

                                <p>Overall,  if  materials  for  countertops  are  manufactured  by  Durite,  the  end result must be a hard surface and "Brittle" strength (+/-10 KSI) so that the top can  be  stiff  enough  to  be  used  as  a "Cantilever".  Kitchen  and  Bar  Counters requires a hard surface, created for harsh environment at molecular level. </p>

                                <h2><u>Manufacturing of Kitchen & Bar Tops: </u></h2>
                                <p>Once the control sample is created and approved, counter and bar tops can be created  by  3D  casting.  This  is  a  single  cast  that  can  create  seamless  and monolithic  counter, whereby the sink, back-splash, front apron and sides, cut outs, drilled holes and all other features can be casted in a single setting.   </p>

                                <p>This  technique  is  totally  different  than "Fabrication",  whereby  pieces  have  to be cutout from a slab and glued together on a miter joint.  Single cast  sink and counter is not glued, it is made from the same materials through and through. This  technique  has  many  advantages,  their  are  no  joints  to  separate  under heavy  loading  of  water/  dishes  or  other  heavy  kitchen  items.  The epoxy tensile material is valued at 2,000 psi strength without any reinforcement. This is very impressive.  </p>

                                <p>An  incredible  added  feature  that  we  can  achieve  with  manufacturing  is "Fusing". This allows us to ship counter and  bar tops in pieces and  once at the site  we  can  chemically  join  the  pieces  and  make  it  as  one  continuous  piece. This is not gluing with a joint  or miter edge. "Fusing" is to bond the materials and making the two sections as one.  We have created Kitchen Island Tops that are 14’ X 14’ as a single piece.  Bar tops that are 180 Linear Feet as a single top, including  the  3"  thickness  Apron  at  the  front  edge.  Single  piece  back  splash that exceeds the lengths of 10’ without any vertical joints, etc.  </p>

                                <p>What ever you can envision, it can be created.</p>

                            </Col>

                        </Row>

                    </Container>

                </section>

                  <MainFooter />

            </Layout>
          )
        }
      }
