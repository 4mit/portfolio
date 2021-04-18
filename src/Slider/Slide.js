import React, { useRef } from 'react';

const Slide = ({ slide, current, handleClick, ...rest }) => {
  const slideRef = useRef();
  const { src, button, index, headline } = slide;
  let classNames = 'slide';

  const imageLoad = (e) => {
    e.target.style.opacity = 1;
  };

  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';

  const mouseMove = (e) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const mouseLeave = (e) => {
    slideRef.current.style.setProperty('--x', 0);
    slideRef.current.style.setProperty('--y', 0);
  };

  return (
    <li
      ref={slideRef}
      className={classNames}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}>
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoad}
        />
        
      </div>
      <article className="slide__content">
          <h2 className="slide__headline">{headline}</h2>
        </article>
    </li>
  );
};

export default Slide;
