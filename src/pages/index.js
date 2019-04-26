import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Helmet from 'react-helmet'

import {
    Navbar,
    Nav,
    NavItem,
    Container,
    Row,
    Col
} from 'react-bootstrap'
import FA from 'react-fontawesome'
import Gallery from '../components/gallery'
import MainFooter from "../components/footer"
import Slideshow_image from "../components/slidershow_image"

export default class IndexPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            galleryIsOpen: false
        };
        this.openGallery = this.openGallery.bind(this);
        this.closeGallery = this.closeGallery.bind(this);
    }
    openGallery() {
        this.setState({galleryIsOpen: true});
    }
    closeGallery() {
        this.setState({galleryIsOpen: false});
    }

  render() {

    const IMAGES = [

        '//mediacdn.durite.us/Jimmys+Bar+Very+Dark+edite+4-02-02.JPG',

        '//mediacdn.durite.us/Jimmys+Bar.JPG',

        '//mediacdn.durite.us/Noche+Loca.JPG',

        '//mediacdn.durite.us/White+Glass+Composition+Floor.JPG',

        '//mediacdn.durite.us/Coral+looking+at+tank+on+left.JPG'

    ]
    return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
        <Helmet title="Durite" meta={[
            {
                "name": "description",
                "content": "Sample"
            }, {
                "name": "keywords",
                "content": "sample, something"
            }
        ]}/>
        <div>
            <Gallery isOpen={this.state.galleryIsOpen} onClose={this.closeGallery} title="Gallery" images={IMAGES}/>
            <div className="slideShow">
                <Slideshow_image sliderimage = {IMAGES}/>
                <button className="viewGalleryButton" onClick={this.openGallery}>
                    <h4>View Gallery
                        <FA name='picture-o'/></h4>
                </button>
            </div>
            <h2>
                Our Products</h2>
            <hr style={{
                background: "#FF2023",
                height: 5,
                width: 150
            }}/>
            <Row className="show-grid">
                <Col xs={12} md={4}>
                    <h4>
                        <Link to='/kitchen-bar-counter-tops/'>Kitchen & Bar Counter tops
                            <FA name='arrow-circle-right'/></Link>
                    </h4>

                </Col>
                <Col xs={12} md={4}>
                    <h4>
                        <Link to='/vanity-top/'>Vanity Top
                            <FA name='arrow-circle-right'/></Link>
                    </h4>
                </Col>
                <Col xsHidden md={4}>

                    <h4>
                        <Link to='/shower-pan-basins/'>Shower Pan/Basins
                            <FA name='arrow-circle-right'/></Link>
                    </h4>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col xs={12} md={4}>
                    <h4>
                        <Link to='/furniture/'>Furniture
                            <FA name='arrow-circle-right'/></Link>
                    </h4>
                </Col>
                <Col xs={12} md={4}>
                    <h4>
                        <Link to='/bathtub/'>Bath Tub / Fixtures
                            <FA name='arrow-circle-right'/></Link>
                    </h4>

                </Col>
                <Col xs={12} md={4}>
                    <h4>
                        <Link to='/walls/'>Walls & Wainscot
                            <FA name='arrow-circle-right'/></Link>
                    </h4>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col xs={12} md={4}>
                    <h4>
                        <Link to='/precast/'>Precast
                            <FA name='arrow-circle-right'/></Link>
                    </h4>

                </Col>
                <Col xs={12} md={4}>
                    <h4>
                        <Link to='/stairs/'>Stairs
                            <FA name='arrow-circle-right'/></Link>
                    </h4>

                </Col>

                <Col xs={12} md={4}>
                    <h4>
                        <Link to='/water-jet/'>Floor & Wall Logos/ Mosaics/ Water-jet
                            <FA name='arrow-circle-right'/></Link>
                    </h4>
                </Col>
            </Row>
            <br/>
            <Row className="show-grid">
                <Col xs={12} md={6}>
                    <h2>What is Manufacturing USA?</h2>
                    <hr style={{
                        background: "#FF2023",
                        height: 5,
                        width: 150
                    }}/>

                    <h4>
                        <Link to='/manufacturing/'>Learn more
                            <FA name='arrow-circle-right'/></Link>
                    </h4>
                    <h4>
                        <Link to='/materials/'>Make your own materials
                            <FA name='arrow-circle-right'/></Link>
                    </h4>
                    <p>Terrazo / Concrete Polymer</p>

                </Col>
                <Col xs={12} md={6}>
                    <h2>What is Fabrication?</h2>
                    <hr style={{
                        background: "#FF2023",
                        height: 5,
                        width: 150
                    }}/>
                    <h4>
                        <Link to='/fabrication/'>Learn more
                            <FA name='arrow-circle-right'/></Link>
                    </h4>
                    <p>Quartz/Glass/Man-made Slabs</p>
                    <p>CaesarStone®, SileStone@, Cambria@, IceStone®, Zodiac®</p>
                </Col>
            </Row>
        </div>
        <MainFooter/>
    </div>
  </Layout>
)
}
}
