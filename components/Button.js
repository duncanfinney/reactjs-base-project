import React from 'react';
import _ from 'lodash';
import './styles/Button.css';

export default class Button extends React.Component {

  static propTypes = {
    type: React.PropTypes.oneOf([ 'postive', 'negative', 'neutral' ])
  };

  render() {

    const {
      type = 'neutral',
      style
    } = this.props;

    return (
      <button {...this.props} style={_.assign({}, styles.default, styles[type], style)}>
        {this.props.children}
      </button>
    )
  }

}


const styles = {
  default: {
    textTransform: 'uppercase',
    lineHeight: '1.5',
    color: '#f9fdff',
    padding: '.5rem 1rem',
    letterSpacing: '.075em',
    borderRadius: '.2376rem',
    transiton: 'border-color .3s cubic-bezier(.19,1,.22,1),background .3s cubic-bezier(.19,1,.22,1)',
    border: '2px solid #f9fdff',
    outline: 'none',
    cursor: 'pointer'
  },
  negative: {
    background: '#EF413A'
  },
  postive: {
    background: '#CADB37'
  },
  neutral: {
    background: '#43C3D1'
  }
};
