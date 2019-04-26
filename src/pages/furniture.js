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
    openLightbox(index, event) {
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

            '//mediacdn.duriteusa.com/furniture/650+6+Lobby+Bench+Furniture.JPG',

           '//mediacdn.duriteusa.com/furniture/Cabinetry+%26+Milk+Glass+Floor.JPG',

           '//mediacdn.duriteusa.com/furniture/Champs+Shoe+Bench.jpg',

           '//mediacdn.duriteusa.com/furniture/Citarella+Cashier+Desk+at+Rockefeller+Ctr.jpg',

           '//mediacdn.duriteusa.com/furniture/McCann+Erickson+Desk+%26+Floor.JPG',

           '//mediacdn.duriteusa.com/furniture/Seating+Furniture+%26+Floor+Milk+Glass.JPG',

           '//mediacdn.duriteusa.com/furniture/Water-Jet+Olive+Leafs%2C+Vines+%26+flower+buds+Table.JPG'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Furniture & Urn/Planters`}/>
                    <div className="pageHeader">
                        <h2>Furniture & Urn/Planters:</h2>
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
                                    Furniture & Urn/Planters:
                                </u></h2>

                                <p>
                                    Durite  manufactures  tables,  and  coffee  table tops  for  several  high-end  furniture producing  companies.  Each  creation  and  top  production  is  based  on  custom design  of  field  colors,  composition  of  stone/glass  and  other  materials  colors that  are  used to  complements  the  interior  decoration.  In  many  instances  the base or legs are selected and sent to us for  adapting and making attachments and detachment easy.
                                </p>
                                <p>Many  of  our   furniture  production  can  be   for  indoors  or  outdoors.  From fainting   chaise   lounge   to   seating   bench,   they   can   all be   made   to   order. Materials  from  composite  stone  to  terrazzo,  concrete  polymer,  quartz  and others.   We  can  create  Urn  and  Planters that  does  not  require  a  metal  lining. Single Cast Large Trough Planters that are used as security knee walls can be made  to  order.  Single  casting  eliminates  the  possibility  of  joints  and  it  can hold as much as "One Ton per square inch" without even reinforcements!
                                </p>
                                <p>Outdoor   furniture   can   be   playful   with   game   tables   such   as   Chess   and Backgammon,  Pool  Tables  and  many  other  creation  combining  fun  and  game with functionality.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <MainFooter/>
            </Layout>
          )}
}
