import React, { Component } from 'react';

import style from './ParallaxView.module.css';

class ParallaxView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'initial',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.position);
    document.addEventListener('scroll', this.position);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.position);
    document.removeEventListener('scroll', this.position);
  }

  position = () => {
    const scrollTop = Math.max(
      document.body.scrollTop,
      document.documentElement.scrollTop
    );

    const viewportHeight = window.innerHeight;
    const widget = this.widget;
    const widgetDimensions = widget.getBoundingClientRect();
    const { top, bottom, height } = widgetDimensions;

    if (bottom < 0 || top > viewportHeight) {
      return;
    }
    console.log({ top, bottom, height, viewportHeight, scrollTop });

    this.setState({
      position: {
        top, bottom, height, viewportHeight, scrollTop,
      },
    });
  }

  render() {
    const { position } = this.state;
    const { top, viewportHeight, height } = position;
    const layers = [style.mountain, style.tree, style.chirpy];

    return (
      <div className={style.parallaxContainer} ref={(c) => { this.widget = c; }}>
      {
        layers.map((layer, index, layers) => {
          let layerTop = 0;
          if (position !== 'initial') {
            layerTop = height /
              (viewportHeight / top) /
              ((layers.length - index) / 1.1);
          }
          const layerStyle = {
            transform: `translateY(${layerTop}px)`,
          };
          return (
            <div
              className={layer}
              style={layerStyle}
              src={layer}
            />
          );
        })
      }
      </div>
    );
  }
}

export default ParallaxView;
