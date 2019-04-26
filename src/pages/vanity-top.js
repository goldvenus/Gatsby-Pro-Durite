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
        const IMAGES = [

            '//d2q3s7l8p2303e.cloudfront.net/vanity+top/3D+Cast+Sink+%26+Counter+Same+Material.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/vanity+top/Fairfax+Vanity+Top.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/vanity+top/GRN+Gray+Mirror+Vanity+Sink.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/vanity+top/GRN+White+Mirror+Vanity.jpg',

          '//d2q3s7l8p2303e.cloudfront.net/vanity+top/Giraffe+Hotel+Ladies+Powder+Room+Vanity.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/vanity+top/TROUGH+SINK.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/vanity+top/Trough+Sink+With+Slot+Drain.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/vanity+top/Vanity+Cast+Top+and+Sinks+Single+piece.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/vanity+top/W-Hotel+Custom+Shells+Vanity+Top.JPG'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Vanity Tops`}/>
                    <div className="pageHeader">
                        <h2>Vanity Tops</h2>
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
                                        Vanity Top: (Manufacturing/Fabrication)
                                    </u>
                                </h2>

                                <p>
                                    Vanity tops are normally for single, double or multiple sinks, made from the same materials as the top, or different. Design of tops vary from simple "Top only" with cut out for under-mount sink and faucet holes, to the more complicated with heavy thickness edges (including the cut-out for sink), to the very sophisticated single cast one piece top, sink and back-splash.
                                </p>
                                <p>We have constructed many vanity tops in many different materials including crushed mirrors in black obsidian, but what stands out the most is a single Vanity Top with back splash that was made for a 300 rooms hotel. This top was made with Terrazzo in epoxy with sea shells, colored glass and crushedlime stone. The average cost of 6’ length top was $1,500 back in the 80’s. We were later told that it was the most single costly item that was purchased by the hotel. However most visitors where so impressed with it that this vanity and cabinetry became the post-card feature for this hotel’s promotion. We still get referrals from it.
                                    <b className="accentText">Simple, elegant, and the wow factor.</b>
                                </p>
                                <p>Most vanity tops are preferred to be in white color and obviously in an environment of hair coloring, shampoo and other staining materials, using white marble is not a practical solution. Many of the vanity tops today are made from man-made materials such as CaesarStone®, SileStone®, Cambria®, Zodiac@, IceStone, etc. Polymer based materials are made for harsh staining environment and are impermeable.
                                </p>
                                <p>Terrazzo & Concrete Vanity Tops are very fashionable. Again, if those materials are not made with polymers, there is always the possibility of stain, cracking and bacterial growth.
                                </p>

                                <p>
                                    Maintenance can become a major undertaking in a hotel that is visited by many. deterioration, discoloration and staining effects the visitor’s first impression. sometimes it is more cost effective to repair than replace or remove and or sent for refurbishing. So its best for design to use materials that are tailored for this type of harsh environment. Practical, Elegant and almost zero Maintenance.
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
