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

          '//mediacdn.duriteusa.com/logos/911Memorial+Service.jpg',

          '//mediacdn.duriteusa.com/logos/Beverly+High+Logo.JPG',

          '//mediacdn.duriteusa.com/logos/Bridge+of+Life+Cromosome.jpg',

          '//mediacdn.duriteusa.com/logos/Emeril+Fish+Inlay+Vegas.jpg',

           '//mediacdn.duriteusa.com/logos/+Flower+Wall+Panel.jpg',

           '//mediacdn.duriteusa.com/logos/21+West+St+Mosaic+Pattern.JPG',

           '//mediacdn.duriteusa.com/logos/3D+in+a+2D+Marble.jpg',

           '//mediacdn.duriteusa.com/logos/455+CPW+Art+Nouveau.jpg',

           '//mediacdn.duriteusa.com/logos/9-11+American+Flag.JPG',

           '//mediacdn.duriteusa.com/logos/91-1+NYStte+Emblem+At+night.JPG',

           '//mediacdn.duriteusa.com/logos/911+Monument.JPG',

           '//mediacdn.duriteusa.com/logos/AC.+Resort+Durrazzo.JPG',

           '//mediacdn.duriteusa.com/logos/Art+Nouveau+Tile+Panels.jpg',

           '//mediacdn.duriteusa.com/logos/Bridge+of+Life+begining+point+DNA+copy.jpg',

           '//mediacdn.duriteusa.com/logos/COACH+Brass+Logo+in+Terrazzo.JPG',

           '//mediacdn.duriteusa.com/logos/Crunch+at+Broadway.JPG',

           '//mediacdn.duriteusa.com/logos/DECA+LOGO+closeup+details.JPG',

           '//mediacdn.duriteusa.com/logos/DECA+LOGO.JPG',

           '//mediacdn.duriteusa.com/logos/Detail+of+Mosaic+Corner.jpg',

           '//mediacdn.duriteusa.com/logos/Durite+Floor+Inlay.JPG',

           '//mediacdn.duriteusa.com/logos/Emeril\'s+Fish.jpg',

           '//mediacdn.duriteusa.com/logos/Example+of+floor+%26+Wall+Pebbles.jpg',

           '//mediacdn.duriteusa.com/logos/Floor+Inlay.JPG',

           '//mediacdn.duriteusa.com/logos/Gardinia+Floor.JPG',

           '//mediacdn.duriteusa.com/logos/Hudson+St+Floor%26+Interior+Lobby.JPG',

            '//mediacdn.duriteusa.com/logos/Hudson+St+Terrazzo+Lobby.JPG',

            '//mediacdn.duriteusa.com/logos/ICast+Tiles.JPG',

            '//mediacdn.duriteusa.com/logos/Installation+of+Nobu+Panels.bmp',

            '//mediacdn.duriteusa.com/logos/Interior+Mosaics.jpg',

            '//mediacdn.duriteusa.com/logos/JPMC.jpg',

            '//mediacdn.duriteusa.com/logos/Large+Art+Wall+Panel+In+terrazzo+media+Private+Collection.JPG',

            '//mediacdn.duriteusa.com/logos/Lobby+Floor+%26+Desk.JPG',

            '//mediacdn.duriteusa.com/logos/Mass+Logo+after+completion.JPG',

            '//mediacdn.duriteusa.com/logos/Mass+Logo+near+completion.JPG',

            '//mediacdn.duriteusa.comt/logos/McCann+Erikson.jpg',

            '//mediacdn.duriteusa.com/logos/Mohegan+Sun+Summer+Entrance+30\'+Logo+Emblem.jpg',

            '//mediacdn.duriteusa.comt/logos/Mohegan+Sun+Summer+Entrance+Durrazzo+Corn.jpg',

            '//mediacdn.duriteusa.comt/logos/Montefiore+Hospital+BRIDGE+of+LIFE.jpg',

            '//mediacdn.duriteusa.comt/logos/Montefiore+Pendulem+%26++Durite+Floor+Logos.jpg',

            '//mediacdn.duriteusa.comt/logos/Mosaic+Interior+Overall+View.jpg',

            '//mediacdn.duriteusa.comt/logos/Mosaics+Closeup.jpg',

            '//mediacdn.duriteusa.comt/logos/Mosaics.jpg',

            '//mediacdn.duriteusa.comt/logos/PH+Living+Room.jpg',

            '//mediacdn.duriteusa.comt/logos/Pattern+of+Circular+Tiles+old+sun+room.png',

            '//mediacdn.duriteusa.comt/logos/Planet+Hollywood+Brass+Inlay.jpg',

            '//mediacdn.duriteusa.comt/logos/Razzi+School+exterior+under+construction.JPG',

            '//mediacdn.duriteusa.comt/logos/Razzi+School+exterior.JPG',

            '//mediacdn.duriteusa.comt/logos/Rent+the+Run+Way+Logo.JPG',

            '//mediacdn.duriteusa.comt/logos/SBLI+Logo+Panel.JPG',

            '//mediacdn.duriteusa.comt/logos/St+Antonio+Museum+Men+Dress+Shoes+Way+Finding.JPG',

            '//mediacdn.duriteusa.comt/logos/St.+Antonio+Museum+Way+Finding+Ladies+Dress+shoes.jpg',

            '//mediacdn.duriteusa.comt/logos/St.+Antonio+Museum+Way+Finding+Tennis+shoes.JPG',

            '//mediacdn.duriteusa.comt/logos/Stone+Water+jet+Inlay+in+Terrazzo+Floor+.JPG',

            '//mediacdn.duriteusa.comt/logos/Symphony+Hall+Durrazzo+Floor+Art.JPG',

            '//mediacdn.duriteusa.comt/logos/Terrazzo+Star+Burst+SBFL.JPG',

            '//mediacdn.duriteusa.comt/logos/The+Brill+Terrazzo+Emblem.JPG',

            '//mediacdn.duriteusa.comt/logos/Tubular+forms.jpg',

            '//mediacdn.duriteusa.comt/logos/Valentino+Corridors.jpg',

            '//mediacdn.duriteusa.comt/logos/Water-Jet+Olive+Leafs+%26+Vine+Floor.JPG'

        ]

        return (
          <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <div>
                    <Helmet title={`Durite | Floor and walls Logos / Mosaics and Water-Jet Technology`}/>
                    <div className="pageHeader">
                        <h2>Floor and walls Logos / Mosaics and Water-Jet Technology:</h2>
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
                                        Intro & History
                                    </u>
                                </h2>

                                <p>
                                    Durite is so advanced in this technology that many soft materials that could not be water-jet, could be cut with jewelry precision. This may sound odd for a person that has not done water-jet and it is difficult to technologically explain about the cutting deviation with water-jet. As an example our early works started with creating a very unique Bamboo cross sections imbedded in natural black obsidian. More than 30,000 pieces of bamboo had to be cut from cross sections in different diameters. At the time water-jet technology was the solution, but to our surprise after the jets, the thickness was not uniform and the edges were jagged. We had to learn the hard way that the best method was labor intensive old fashion hand cutting. This experience prepared us for many future projects that combined “Organic” with “In-Organic” materials. Organic expands with moisture in air and in-Organic does not. This type of material combination is very attractive but susstable to failure and cracking if methods are not scientifically and engineering based on sound principals.</p>
                                <p>
                                    Our US and International Patent allowed us to create narrow shapes as thin as 1/16” thickness that could be cut in any shape, color added and designed. Our first major project was for the Carl Segan Wing at the Motefiore Children’s Hospital in the Bronx. This was our opportunity to serve the community and show what functional art is all about. Designed by the Rockwell Group we worked on over 100 design elements to create a journey of life from basic cell elements to finger prints and animals & humans. Those elements where installed in terrazzo floors and created an interactive and playful atmosphere for the children that the hospital serves. The wow factor of this design and floors had such an impact that many started featuring the “Bridge of Life” on their web site and publications. Even though this was a complement to us, but we had to legally peruse and ask the removal and proper credit for this work.
                                </p>

                                <p>Since then some 20 years had passed and through time we had created many interesting and innovative designs, floor logos and wall emblems. Durite was Commissioned by Nassau County and the State Department to create the First 911 Memorial for the Police & Fire-Fighters at Eisenhower Park in Westbury New York. Durite used this technology to create Police, Fire-Fighters, City and State Government Emblems that are jewelry precision. By day the different emblems and designs look like solid stone, and by night the stones are back lite and emblems turns into stain glass windows, similar to cathedral glass. This Memorial and Technology is the first of its kind in the world. An absolute Wow factor standing tall for over 25 feet, proudly representing our nation and our fallen heroes and all their families. State was so impressed that commissioned us for other projects.</p>

                                <h2>
                                    <u>Residential Application, Mosaics & Terrazzo:</u>
                                </h2>

                                <p>In residential we worked with stone designers that water-jet marble with olive leafs and vine motif and imbedded in terrazzo, reminiscent of the old Roman Villas. Mosaics in terrazzo reminiscent of the old Pompeii Floors (at a lesser cost than hand cutting the mosaics), and many more similar projects.</p>

                                <p>In New York many building lobbies and floors with Mosaic pattern like Greek Keys, Chain Links, and other motifs, were constructed in the late 1800’s. Many of those buildings have now major cracks running through the Mosaics, or the mosaics had deteriorated. In many projects we were able to replicate the existing and send it to the installer. Many of those building they can have Tax incentives for restoring Historic and Landmark. We have worked on many Landmark Buildings for both exterior and interior replicating materials and art that could not be constructed, or too expensive to create with conventional methods. Such as 21 West Street In NYC.</p>

                                <h2>
                                    <u>Commercial, Hotels, Institutions, Educational & Medical Facilities:</u>
                                </h2>

                                <p>Many designers and owners that are knowledgeable, do know that what can be used for commercial can be used for residential and vise-versa. As a matter of fact commercial takes much more usage and abuse than residential, simply because of the larger amount of foot traffic and dragging items on floors.</p>

                                <p>We have done many interesting and pioneering projects with the water-jet and Durite’s Patent technology. As an example we were once approached by the design team working on the Benjamin Franklin’s Library. We were told that miraculously they have the finger print of Benjamin Franklin and if we can translates this on a Foyer of 9’ X 11’. Wow!! This type of works cannot be done with water-jet. Each pattern would require a different setting and it would be cost prohibitive to program thousand of small elements. Durite has been able to create a Patent that what ever than can be scanned as photo it can be turned into natural stone or composite stone similar to terrazzo in 2D or 3D. One of the floor panels at the Children’s Hospital at Montefiore 36” X 36” is a Thumb Print translated into stone.</p>

                                <p>We have created many corporate and institutional logos for very famous names and symbols that are easily associated with that specific firm or institution. We had send them to Porto Ricoh, Vegas, Miami, Singapore and Japan for easy install by local contractors. Our Latest project in Modular-Water Jet Chain Link Flooring won the 2015 National Awards in Terrazzo. Set over 1800 sf of floor with no expansion joints created a chain-link of white and black pattern used in the most difficult environment of restaurant flooring without any sealers or flooring protection. This is Functional-Art at it’s best.</p>

                            </Col>
                        </Row>

                    </Container>
                </section>
                <MainFooter/>
            </Layout>
        )
    }
}
