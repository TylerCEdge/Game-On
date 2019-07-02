import React, { Component } from "react";
import axios from 'axios';
import './image.css'

class Image extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/images')
      .then(response => {
        this.setState({ images: response.data });
        this.startSlide();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  startSlide = () => {
    setInterval(this.goToNextSlide, 5000)
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>
      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}

export default Image;