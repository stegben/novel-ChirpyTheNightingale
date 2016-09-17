import { Component } from 'react';

class Parallax extends Component {
  FALLBACK_LIMIT: 720,

  getInitialState() {
    return {
      shouldFallback: window.innerWidth < this.FALLBACK_LIMIT,
      position: 'initial'
    }
  },

  componentDidMount() {
    window.addEventListener('resize', this.position)
    document.addEventListener('scroll', this.position)

    // Prefetch fallback
    var img = new Image()
    img.src = this.props.fallback
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.position)
    document.removeEventListener('scroll', this.position)
  },

  position() {
    requestAnimationFrame(() => {
      var scrollTop = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      )

      var viewportHeight = window.innerHeight
      var viewportWidth = window.innerWidth
      var widget = this.refs.widget
      var widgetDimensions = widget.getBoundingClientRect()
      var { top, bottom, height } = widgetDimensions

      if (bottom < 0 || top > viewportHeight) {
        return
      }

      this.setState({
        shouldFallback: viewportWidth < this.FALLBACK_LIMIT,
        position: {
          top, bottom, height, viewportHeight, scrollTop
        }
      })
    })
  },

  getStaticLayer() {
    var { blockName } = this
    return (
      <div className={ `${blockName}__layer ${blockName}__layer--static` }>
        <a href={ this.props.href }>
          <h3 className={ `${blockName}__title` }>
            { this.props.title }
          </h3>
          <p>
            { this.props.description }
          </p>
        </a>
      </div>
    )
  },

  render() {
    var { background, fallback } = this.props
    var { shouldFallback, position } = this.state
    var { top, bottom, viewportHeight, height } = position

    var blockName = this.blockName = 'react-parallax'
    var blockStyle = {
      height: this.props.height,
      backgroundImage: `url(${ shouldFallback ? fallback : background })`
    }

    if (shouldFallback) {
      return (
        <div className={blockName} style={blockStyle} ref='widget'>
          { this.getStaticLayer() }
        </div>
      )

    } else {
      return (
        <div className={blockName} style={blockStyle} ref='widget'>
          <div className={ `${blockName}__layers` }>
            {
              this.props.layers.map((layer, index, layers) => {
                var layerTop = 0
                if (position !== 'initial') {
                  layerTop = height /
                    (viewportHeight / top) /
                    ((layers.length - index) / 1.25)
                }
                var layerStyle = {
                  transform: `translateY(${ layerTop }px)`
                }
                return (
                  <img className={ `${blockName}__layer` }
                       style={ layerStyle }
                       src={ layer }/>
                )
              })
            }
            { this.getStaticLayer() }
          </div>
        </div>
      )
    }
  }
}

export default Parallax;
