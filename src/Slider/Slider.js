import React from "react";
import Slide from "./Slide";
import SliderControl from "./SliderControl";
import "./Style.css";

class Slider extends React.Component {
  constructor(_props) {
    super();
    this.state = {
      current: 1,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.slideSelect = this.slideSelect.bind(this);
  }

  nextSlide() {
    let { current } = this.state;
    const { slides } = this.props;
    if (current === slides.length) {
      current = 0;
    } else {
      current++;
    }
    this.setState({ current });
  }

  prevSlide() {
    let { current } = this.state;
    const { slides } = this.props;
    if (current === 0) {
      current = slides.length - 1;
    } else {
      current--;
    }
    this.setState({ current });
  }

  slideSelect() {}

  render() {
    const { current } = this.state;
    const { slides, title } = this.props;

    const wrapperTransform = {
      transform: `translateX(-${(current * 100) / slides.length}%)`,
    };
    return (
      <>
        <h3 className="visuallyhidden">{title}</h3>
        <div className="slider">
          <ul className="slider__wrapper" style={wrapperTransform}>
            {slides.map((s, idx) => {
              return (
                <Slide
                  slide={s}
                  current={current}
                  handleClick={this.slideSelect}
                  key={idx}
                />
              );
            })}
          </ul>

          <div className="slider__controls">
            <SliderControl
              type={"prev"}
              title={"Previous"}
              handleClick={this.prevSlide}
            />
            <SliderControl
              type={"next"}
              title={"Next"}
              handleClick={this.nextSlide}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Slider;
