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

               'https://mediacdn.durite.us/manufacturing/Champs+Cashier+Desk.jpg',

               'https://mediacdn.durite.us/manufacturing/Tiffany+Pantry+Area.JPG',

               'https://mediacdn.durite.us/manufacturing/Tiffany+Pantry+Kitchen+Top%2C+Island+and+floor.JPG',

                 'https://mediacdn.durite.us/manufacturing/Brooklyn+College+Library+DeskTop.JPG',

              'https://mediacdn.durite.us/manufacturing/Brooklyn+College+Library+Info+DeskTop+Two+Levels.JPG',

                 'https://mediacdn.durite.us/manufacturing/Brooklyn+College+Library+Information+DeskTop.JPG',

                 'https://mediacdn.durite.us/manufacturing/Brooklyn+College.JPG',

                 'https://mediacdn.durite.us/manufacturing/Champs+Cashier+Desk+(1).JPG',

                 'https://mediacdn.durite.us/manufacturing/City+Center+Grand+Stairs.JPG'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Manufacturing`}/>
                    <div className="pageHeader">
                        <h2>Manufacturing</h2>
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
                                    Manufacturing
                                </u></h2>

                                <p>
                                    Manufacturing is different from Fabrication. With Manufacturing we start with creating the materials based on a certain specifications, colors, mix of stones, sizes,  density  and  other  materials  that  we  will  be  adding  to  the  mix.  After achieving the control sample,   we create the desired shapes. Manufacturing is done based on single casting. For example if a countertop requires a cutout for a  sink,  plumbing  fixtures  and  a  3"  apron  (front  edge)  this  is  done  in  a  single 3D-Casting   so   everything   is   in   one   piece   and   this   look   is   totally   and functionally  different  than  (fabrication)  where  the  joints  are glued  together. glued  joints  they  have  to  be  put  together  professionally  that    glued lines  are not visible. with singe casting there are no joints.  in addition, glued joints may separate  and  may  not  be  good  for  certain  applications  like  heavy  weights  in sinks or shower basin, etc.  Single cast does not separate (Tension is 2 KSI).
                                </p>

                                <p>There are no limitations to casting shapes. We have no limitations to size and lengths of castings. the limitations are only in transport and site delivery. </p>

                                <h2><u>Fusing </u></h2>
                                <p>With  manufacturing  we  also  have  the  ability  of  (Fusing).  This  is a  Durite technology to weld pieces together. Joints can melt and become a single piece. we have created bar tops for nearly 150 liner feet seamlessly with Fusing. we have created many single counter and trough sinks  in single castings. </p>

                                <h2><u>Cost of Manufacturing</u></h2>
                                <p>Depending   on   the "Material"   project   size   (how   many   molds   has   to   be produced), time frame (from approved samples to finish production with one shift  of  crews  or  three  shift  of  crews),  cost  (  labor  &  material)  and  possibly installation (labor on site), cost is a variable.  </p>
                                <p>It’s more productive to work a manufacturing budget backwards, from what is the target cost?  Sometimes if from the get go there is not enough budget it’s anexercise of unreal desires. </p>
                                <p>Cost   has   to   be   realistic.   We   would   rather   deal   with   a   client   that is knowledgeable  has  some  sort  of  understanding of  market  cost,  than  one  who has  none.  We  had  mass  produced  for  many  projects  in  Vegas,  in  Miami  and Japan and the Far-East. So nothing is too far. </p>

                            </Col>
                        </Row>

                    </Container>
                </section>
                <MainFooter/>
            </Layout>
          )
        }
      }
