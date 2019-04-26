import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Tabs,
    Tab
} from 'react-bootstrap';
import FA from 'react-fontawesome'
import Lightbox from 'react-images'

class Gallery extends Component {
    constructor(props) {
        super(props);
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
        event.preventDefault();
        this.setState({currentImage: index, lightboxIsOpen: true});
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
        const isOpen = this.props.isOpen;
        const images = this.props.images;

        if (isOpen == true) {
            return (
                <div className="gallery">
                    <Container className="m-t-lg">
                        <button className="cancel-button" onClick={this.props.onClose}>
                            <FA name="times-circle-o" size="2x"/>
                        </button>
                        <Row>
                            <h1>{this.props.title}</h1>
                            <hr className="title-underline"/>
                        </Row>
                        <Lightbox currentImage={this.state.currentImage} images={images} isOpen={this.state.lightboxIsOpen} onClickPrev={this.gotoPrevious} onClickNext={this.gotoNext} onClose={this.closeLightbox} backdropClosesModal={true}/>
                        <Row>
                        {images.map((row, i) => {
                          let index = i;
                          let _this = this;
                          return <Col xs={6} sm={4} md={3} key={images[i].src} onClick={(e) => _this.openLightbox(index, e)}><img className="gallery-image" src={images[i].src}/></Col>;

                        })}
                        </Row>
                    </Container>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
}

export default Gallery
