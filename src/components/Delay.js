import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

class Delay extends Component {
  static propTypes = {
    children: PropTypes.node,
    wait: PropTypes.number,
  };

  static defaultProps = {
    wait: 250,
  };

  state = {
    waiting: true,
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        waiting: false,
      });
    }, this.props.wait);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    if (!this.state.waiting) {
      return <Fade bottom>{this.props.children}</Fade>;
    }

    return <Fade bottom>{this.props.children}</Fade>;
  }
}

export default Delay;
