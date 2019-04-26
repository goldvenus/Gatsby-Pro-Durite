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

        const IMAGES = [

            '//mediacdn.durite.us/walls/Nobu+Wall+%26+Floors.JPG',

             '//mediacdn.durite.us/walls/citerela+wall+panels.JPG',

             '//mediacdn.durite.us/walls/Coral+Translucent+panels-2.JPG',

            '//mediacdn.durite.us/walls/Coral+panel+on+left.JPG',

          '//mediacdn.durite.us/walls/UN+Fountain.jpg',

            '//mediacdn.durite.us/walls/Nobu+Bamboo+Panels.JPG',

            '//mediacdn.durite.us/walls/Coral+Panels+at+entrance.JPG',

            '//mediacdn.durite.us/walls/Coral+Reef+Wall+Panels+Light+in+off+position+.JPG',

            '//mediacdn.durite.us/walls/CoralReef5.jpg',

            '//mediacdn.durite.us/walls/CoralReef8.jpg',

            '//mediacdn.durite.us/walls/Durite+Fountian+for+luis+De+Cruis.jpg',

            '//mediacdn.durite.us/walls/Fountian+picture.jpg',

            '//mediacdn.durite.us/walls/Jimmy\'s+East+57.JPG',

            '//mediacdn.durite.us/walls/Nobu+Floor+%26+wall+Panels.JPG',

            '//mediacdn.durite.us/walls/Nobu+Floor+Panels.JPG',

            '//mediacdn.durite.us/walls/UN+Fountain+Wall.jpg',

            '//mediacdn.durite.us/walls/UN+Wall+Fountain+2.jpg'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Walls & Wainscot`}/>
                    <div className="pageHeader">
                        <h2>Walls & Wainscot</h2>
                        <hr style={{
                            background: "#FF2023",
                            height: 5,
                            width: 150
                        }}/>
                    </div>
                    <div className="slideShowSection">
                        <div className="slideShow">
                          <Slideshow_image sliderimage = {IMAGES}/>

                            <Lightbox currentImage={this.state.currentImage} images={IMAGES.map(({src}) => ({src: src}))} isOpen={this.state.lightboxIsOpen} onClickPrev={this.gotoPrevious} onClickNext={this.gotoNext} onClose={this.closeLightbox} backdropClosesModal={true}/>
                            <button className="viewGalleryButton" onClick={this.openLightbox}>
                                <h4>View Gallery
                                    <FA name='picture-o'/></h4>
                            </button>

                        </div>
                        <div className="slideShowBottom">
                            <a href="#bodyText" className="readTextButton">Read more
                                <FA name="arrow-circle-down"/></a>
                        </div>
                    </div>

                </div>

                <section className="textSection" id="bodyText">
                    <Container>
                        <Row className="show-grid">
                            <Col xs={12} md={12} lg={12}>
                                <h2>
                                    <u>
                                        Wall Paneling/ Wainscot: (Manufacturing/Fabrication)
                                    </u>
                                </h2>

                                <p>
                                    Durite has been manufacturing and installing wall systems since the late 70’s with crushed natural stone mixed with Elastomeric Acrylics. Durite was one of the first to bring the EFIS (Exterior Finish Insolated Systems) system to America. Surfacing many high to medium rise exterior buildings that up to today they have not fractured or discolored. In the early 80’s, Durite was contracted to produce a combination of concrete and acrylic polymers for Disney’s Epcot Center. The Panels created where works of arts and received a heart full thanks from Disney. This was a great honor from a company that has masters in the art of castings and material engineering. Durite works with Disney expanded to create translucent panels that was glass composition in clear resin. Panels where back lite and extended from floor to ceiling. Amazingly after all those years they are still at the Coral Reef Epcot Center.
                                </p>
                                <p>The next important project with wall paneling was for a special client with many vintage cars. Request was for a high impact resisting walls that looked like light gray concrete, but easy to wash down (3 stories high) with smooth surface that would not allow carbon deposit and makes wash down of these floors easy. In the early 80’s we developed the "Concrete Polymer" that had to be prefabricated in panels, installed and patched without any repaired markings. Through the years we learned how to use this material for flooring as well, and it has become one of our most popular flooring.
                                </p>
                                <p>Today, we are very advanced with wall systems, we can make any type of composite materials, from Terrazzo, Quartzite to Concrete Polymer. We can make materials for interior and exterior. Single piece without joints, wrapped around columns and curved walls. Panels that can allow light through, with infinite possibilities of materials used in mix, from natural earth’s materials to organic and synthetic.
                                </p>
                                <p>We created many famous materials that are pioneering such as Nobu NYC ( Natural Bamboo Rings in Black Obsidian) , Valentino , City Center’s, Mohegan Sun, MGM, and many others.
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
