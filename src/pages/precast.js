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

            '//mediacdn.durite.us/precast/111-5th+ave+Exterior+Pre-cast+Molding.jpg',

            '//mediacdn.durite.us/precast/116+CPW+Interior+Pre-cast+Hall+Way.JPG',

            '//mediacdn.durite.us/precast/315+E+72st+Exterior+Facing+South+72+St.JPG',

            '//mediacdn.durite.us/precast/650+6+Pre-Fab+Elevator+floor.JPG',

            '//mediacdn.durite.us/precast/Cove+Base+%26+Round+Corners+.JPG',

            '//mediacdn.durite.us/precast/Cove+base+Imbedded+in+Floor.JPG',

            '//mediacdn.durite.us/precast/Epcot+Center+Coral+Reef+Interior+Wall+Panels.JPG',

            '//mediacdn.durite.us/precast/Epcot+Center+Coral+Reef+looking+at+Water+Tank.JPG',

            '//mediacdn.durite.us/precast/Hudson+Elevator+Floor.JPG',

            '//mediacdn.durite.us/precast/In+and+Out+Cove+Base.jpg',

            '//mediacdn.durite.us/precast/Large+Exterior+Panels+set+on+pedestal+Pavers.JPG',

            '//mediacdn.durite.us/precast/Pre-Fab+Oyster+Bar+%26+Banquet.jpg',

            '//mediacdn.durite.us/precast/Pre-Fab+Oyster+BarBooth.jpg',

            '//mediacdn.durite.us/precast/Precast+Ceiling.JPG',

            '//mediacdn.durite.us/precast/Precast+Round+Column+and+Corner+Base+%26+Star.jpg',

            '//mediacdn.durite.us/precast/Precast+Wall+Medallion.JPG',

            '//mediacdn.durite.us/precast/WALES+Hotel+Precast+EXTERIORS.JPG',

            '//mediacdn.durite.us/precast/WWF+Round+Table+Booth.jpg'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Precast`}/>
                    <div className="pageHeader">
                        <h2>PRECAST & WATER-JET TECHNOLOGY</h2>
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
                                    PRECAST & WATER-JET TECHNOLOGY:
                                </u></h2>

                                <p>
                                    With  the  advancements  of  3D  printing  and  water  jet  technology  almost  any type  of  shapes  can  be  created.  Molding  technology  can  be  very costly  and  the yield (the amount of castings prior to the mold breaking up) varies depending on the type of materials that the molds are made from.
                                </p>
                                <p>Through  the  years  Durite  had  experimented  with  different  types  of molding materials for cost effectiveness and efficiency. Casting Materials can be poured in vacuum chambers, or subjected to heat, vibration and pressure for creating smooth  and  uniform surfaces.  Durite’s  precast  is  far  advanced  for  sharp  and crisp edges. In the Terrazzo industry we have supplied many leading Terrazzo installers  and  Companies.  Cost  of  precast  varies  depending  on   the  many variables. It starts with engineering for basic materials all the way to the final finish and product.
                                </p>
                                <p>As  previously  mentioned,  our  choice  of  polymers  are  Epoxies.  Those  epoxies are  especially made  for "UV  color  stabilization".  It  is important  to  note  that  if the floor and walls are made of the same materials, precast must be made with the same materials. We have seen many projects that at first the precast looks the  same,  but  with  the  passage  of  time,  the "oxidization  rate"  color  changes and  after  some  time,  the  floors  and  walls  does  not match  to  precast  stairs, columns, and front desks etc.
                                </p>
                                <p>Another  major  factor  is  using "material  mix"  such  as  Terrazzo,  Quartz  or Concrete   Polymer,   that   does   not   dissolve   in   salt/chloride   environment. Surface that is subjected to all sorts of chemicals can dissolve soft  or reactive materials  (materials  that  when  they  come  in  contact  with  ammonia,  bleach and  other  products  can  react)  Obviously  it  is  much  cheaper  to  use crushed marble than crushed glass. This is one example of cost variation.
                                </p>

                                <p>
                                Material’s  Science  and  Engineering  does  not  stop  at  Coloration  (natural  earth or  chemical),  Stability  (oxidization  rate),  Porosity  (staining,  and  retaining surface moisture), Hardness (12 KSI materials that are hard and resilient).</p>

                                <p>Our  reputation  in  the  precast  and  prefab  world  is  well  known  amongst  the  many masters.  A  few  example  are: <b><i>Disney  Epcot  Center,  MGM  Grand,  Mohegan  Sun, Champs,   The   Public   Theater,   Steve   Madden,   W-Hotels,      Met-Life,   Tiffany, Gagosian, JPMC, Rent the Run Way, Valentino, McCann Erickson </i></b>. Speaks for itself. </p>

                                <p>Many  of  those  companies  have  their  own  advanced  precast  technology.  They have  the  best  facilities,  experts  and  resources.    It  is,  and  was  an  honor  to  get recognized  and  appreciated  by  them  for  quality,  mastery  and beauty  of  those works that Durite had produced. Flawless in execution, exquisite and works of arts that made a world of difference and it was not just another precast.  </p>
                            </Col>
                        </Row>

                    </Container>
                </section>
                <MainFooter/>
            </Layout>
          )
        }
      }
