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
            {
                src: 'http://mediacdn.durite.us/Bathtub+%26+Fixtures/BARBARA+BATHROOM.jpg'
            }, {
                src: 'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Bath+Tub+%26+Wall+Panels.JPG'
            }, {
                src: 'http://mediacdn.durite.us/Bathtub+%26+Fixtures/CRUSHED+GLASS+FLOORS.JPG'
            }, {
                src: 'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Fairfax+BRM+SMALL+SIZE.jpg'
            }, {
              src: 'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Fairfax+Bench+%26+Panels.jpg'
            }, {
              src: 'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Fairfax+Sink.jpg'
            }, {
              src: 'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Fountain+-Jacuzzi.JPG'
            }, {
                src:'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Fountain-+Jacuzzi.JPG'
            }, {
                src:'http://mediacdn.durite.us/Bathtub+%26+Fixtures/GRN+Gray+Mirror+Tub+Surround+%26+Bathroom+.jpg'
            }, {
                src:'http://mediacdn.durite.us/Bathtub+%26+Fixtures/GRN+Gray+Vanity+Mirror-2.jpg'
            }, {
                src:'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Molded+Tub.JPG'
            }, {
                src:'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Moroccan+Fountain+With+Leaf+Impression.JPG'
            }, {
              src:'http://mediacdn.durite.us/Bathtub+%26+Fixtures/TUB+Surround+Panel.jpg'
            }, {
              src:'http://mediacdn.durite.us/Bathtub+%26+Fixtures/Tub+%26+Walls+Same+Material.JPG'
            }
        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div className="container">
                    <Helmet title={`Durite | Bathtubs & Fixtures`}/>
                    <div className="pageHeader">
                        <h2>Bathtubs & Fixtures</h2>
                        <hr style={{
                            background: "#FF2023",
                            height: 5,
                            width: 150
                        }}/>
                    </div>
                    <div className="slideShowSection">
                        <div className="slideShow">
                            <Slider {...settings}>
                                <div><img onClick={this.openLightbox} src={IMAGES[0].src}/></div>
                                <div><img onClick={this.openLightbox} src={IMAGES[1].src}/></div>
                                <div><img onClick={this.openLightbox} src={IMAGES[2].src}/></div>
                                <div><img onClick={this.openLightbox} src={IMAGES[3].src}/></div>

                            </Slider>
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
                                    Bathtubs: Manufacturing & Fabrication
                                </u></h2>

                                <p>
                                    There  are  no  comparisons  between  a  bath  tub  that  is  $2,000  on  average  in Acrylic  compared  to  a  bath  tub  that  is  $27,000  in  stone.    Stone/Terrazzo  or Quartz bath tubs is not for everyone. Amazingly we  were told by a stone bath tub  fabricator  that  on  average  they  sold  one  each  month!!.  This  is  incredible, not  only  because  of  shipping  (weighing  more  than  a  ton)  but  also  for where they can place such a tub and the floors that could support it? We understood that this type  of  bath  tubs  are  used  inside  even a  Bedroom  as  a  stand  alone  feature  or  a Combination of Bathtub and Rain Shower Room.
                                </p>
                                <p>During  the  Art  Deco  period  (1920’s),  Bath  Tubs  were  cast  iron  with  white glazing  for  the  most  part.  Some  fancy  bath  tubs  where made  in  natural  stone (since Napoleon Era) but in the Deco Period Cast Terrazzo Tubs, Shower Basin and  Bench’s  were  occasionally  used.  The  weight  of  Terrazzo  bath  Tubs  in cement  Terrazzo  would  be  similar  to  Natural  Stone.  Gradually  after  the  war this  type  of  tubs  died  out.    During  the  80’s  bath  tubs  made  from  concrete started  emerging  with  lots  of  problems  with  staining  and  cracking.  Designers liked  the  idea  of  concrete  so  we  developed  the  Concrete  Polymer  that  looks like concrete but functions like a high strength, light weight polymer.
                                </p>
                                <p>Durite  has  been  involved  in  restoration  of  natural  stone  tubs by  adding  a  thin  layer  of  the  same  stone  composition  as  a  liner. We  had  created concrete-polymer  or  limestone-polymer  bathtubs  that  are  much  lighter  (1-1/2”)  thickness,  much  stronger  and  does  not  need  reinforcement.  Extremely attractive as  natural stone and much easier to transport and install. however as  mentioned  those  type  of  tubs  are  very  unique  and  cost  is  some  where between Acrylic and Natural Stone, depending on how exotic the material is?
                                </p>
                                <p>Typically in many hotels, residential buildings, etc. a tub enclosure or bath-tub surround is designed to hide the acrylic tub and keep the cost to a reasonable budget  depending  on  the  looks  and  materials.  Many  of  the  readily  available man-made    slabs    like    Caesarstone®,    Silestone®,    Cambria®,    Zodiac®, Icestone®, etc. are being used as cladding around  bathtub surround.
                                </p>

                                <p>Based  on  your  design,  material  choices  (if  you  are  supplying  the  slabs,  or  we are creating and developing the material?) we can create your desired project.  </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <MainFooter/>
            </Layout>
          )}

}
