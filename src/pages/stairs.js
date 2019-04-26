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

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Arup+Concrete+Polymer+Nome-Cracking+Stairs.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Arup+Stair+Pans+filled+with+Concrete+Polymer.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Bowlmor+Lanes+Translucent+Stairs.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Floor+to+Stepping+Stone.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Greene+Winged+Stairs.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Lacoste+Airplane+Winged+Stair.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Lacoste+Stairs+View+from+Exterior.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/PH+Interior+Overall.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/PH+Stairs+Head+On+Shot.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/PH+Stairs.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/PH+Steps+to+Exterior.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Public+Theater+Nosing.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Publice+Theater+Grand+Stairs.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Single+piece+Tread+%26+Riser+Off-Set+at+70+degrees.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Single+piece+Tread+%26+Riser.jpg',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Stair+Risers.JPG',

            '//d2q3s7l8p2303e.cloudfront.net/stairs/Stair+Treads+%26+Risers+Separate+Pieces+Prefab+%26+Install.JPG'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Stairs, Treads, & Risers`}/>
                    <div className="pageHeader">
                        <h2>Stairs, Treads, & Risers</h2>
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
                                <h2><u>
                                    Stairs, Treads & Risers: Manufacturing
                                </u></h2>

                                <p>
                                    Durite    has    been    involved    in    Restoration,    Design,    Manufacturing    and Construction of Stair Treads and Risers spanning several decades. Any unique shapes,  designs  and  models  can  be  Manufactured  from  simple  treads  to  the more sophisticated 3D single piece tread & risers.
                                </p>
                                <p>Each   stair   tread   depending   on   it’s   own   environment   requires   special attention.  As  an  example  in  many  schools,  kids  like  to  jump  on  stairs  from  a higher elevation. If this concentrated force could not be absorb at impact like a  shock  absorber  by  the  tread,  the  minimum  that  could  happen would  be  the fracturing  of  the  stair  tread.  This  could  also  lead  to  the  dangerous  conditions of stair nose breaking at impact and causing the jumper to be in sever danger.
                                </p>
                                <p>Our work with stair treads began with replacement and restoration of  the Art Deco Era stairs. Through the passage of time, we learned about different color cement  and  type  of  stones  that  made  a  certain  step.  Cement  colors  in  Green, Yellow, Purple, Brown and Crimson, where desired colors for flooring & steps. During the Deco period playing with many colors of terrazzo reached its peak in   design.   Ironically   this   design   movement   was   taking   place   throughout Europe and the Americas.
                                </p>
                                <p>Cement  Based  Stair  Treads  must  be  reinforced  with  steal  bars  (mostly  ¾" from top). Even today when Cement based treads are manufactured, this steal reinforcement is necessary. Through the years especially in a salt and chloride  environment  steal  corrosion  expands  the  volume  of  steel  by  almost  three times,  causing  the  fracturing  and  breaking  of  the  stair  surface.  The  fracture would  eventually  lead to  breaking  and  crumbling  of  the  surface  and  a  slow deterioration.  There  are  some  theories  about  using  epoxy-coated  rebar  to delay the corrosion  process, but eventually when salt ions find a little nick or crack  in  the  epoxy  coating  they  will  focus  on  that  weak  point  and  even accelerate the corrosion process.
                                </p>

                                <p>Durite  mostly  manufactures  Tread  &  Risers  in  Epoxy  Binders.  Either for Terrazzo,  Concrete  Polymer  and or  other  materials.    Tread  &  Risers  Can  be separate  (usually  more  cost  effective),  or  they  can  be  a  single  piece  at  ninety degrees  angle(not  glued  and  mitered). Or  tread  and  risers  can  be  at  an  angle like  70  degrees  (a  favorite  of  designers).  Thickness  of  epoxy  stairs  can  be  at 1/2" thickness required for single piece tread and riser casting.
                                </p>

                                <p>Steel  treads  can  be  welded  to  a  center  stringer,  like  wings  of  airplane  visible from   all   sides.   Stringers   can   be   cladded   with   same   material,   seamlessly transforming the stairs to a free standing art piece.
                                </p>
                                <p>Some stairs require templates, Tread & Risers can be in elliptical, moon-sliver, concave, or bumped out shapes. Tread & Risers can be  from a single material or  multi-colors  like  a  ribbon  traveling  to  the  left  and  right  of  the  stair  treads. Stairs can be translucent, similar to frosted glass. </p>

                                <p>Nosing  of  Treads  (without  Risers)  can  be  a  straight  edge  (ninety  degreessharp), or rounded edge. Thickness is 1/2" but at the nosing it can look like 2" or any other dimension within design reason.
                                </p>

                                <p>None-Slip   Nosing   can   either   be   strips   of   epoxy   and  Carboradom   (Silicon Carbide) similar to a very rough sand paper. Or None-Slip Nosing can be  more elaborate,  as  metal  strips  inserts  (typically  1/8"  in  Zinc  or  Brass  that  can  be inserted in one or several parallel lines and raised up from the stair surface by 1/8" for foot grip).
                                </p>

                                <p>Most stairs / risers that Durite Manufactures are Epoxy based. Other polymers does not stand to the constant surface honing by foot traffic and traction.
                                </p>

                                <p>Acrylic Polymers even though very attractive and could achieve water clarity, are  not  molecularly  stable yet.  They  can  fracture  or  amber.  Other  materials that  are  Polyester  based  can  last  longer,  but  once  the  surface ware’s  off  it cannot be brought back to factory level shine.
                                </p>

                                <p>In  recent  years  Tread  design  are  lending  heading towards  combining  fiber-optics  at  nosing.  Nosing  that  extends  and  pass  the  Risers  by  1"  or  more,  can have low voltage diodes emitting lights embedded for downward lighting, way finding and alerting the person’s visual field by making it safer to see the edge of the tread, especially when the treads are black in color or other colors that its hard to see the edge of the stairs while descending.
                                </p>

                                <p>As  new  materials  such  as  Photo  Emitting  Crystals  and  Phosphates  are  being perfected.  The  use  of  strips  for  illuminating  stairs  in  the  event  of  electric outage and way finding will no longer be necessary if treads can illuminate or project downward light.
                                </p>

                                <p>New treads will have inbuilt features for  way finding in the dark, including in Parks, Sidewalks, Airports, Transport Hubs and other public areas. </p>

                                <p>In  future,  photovoltaic  solar  power  could  be  imbedded  in  the  tread  surface, electric current stored inside the tread and with low voltage diode lights couldbe   emitted   from   the   stairs as   needed.   Similar   to   our   many   landscaping lighting.
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
