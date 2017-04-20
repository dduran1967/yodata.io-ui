// @flow
import React from 'react';
import {Input, Button} from 'semantic-ui-react';
import {Motion, spring} from 'react-motion';
import isFunction from 'lodash/isFunction';

class SliderInput extends React.Component {
  state = {
    isOpen: false,
    inputValue: '',
  };

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleChange = (e: Event) => {
    this.setState({inputValue: e.target.value});
  };

  handleSubmit = (e: Event) => {
    e.preventDefault();
    let {inputValue} = this.state;
    this.setState({inputValue: '', isOpen: false});

    if (isFunction(this.props.onSubmit)) {
      this.props.onSubmit(inputValue);
    } else {
      console.error('SliderInput: no onSubmit handler provided');
    }
  };

  static defaultProps = {
    placeholder: '',
    input: {},
    button: {
      style: {},
    },
  };

  render() {
    const maskStyle = {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    };
    let {button, placeholder} = this.props;
    button = {
      ...button,
      style: {...button.style, margin: 0, zIndex: 1010},
    };
    const finalRotation = -135;
    return (
      <Motion style={this.state.isOpen ? {t: spring(1)} : {t: spring(0)}}>
        {({t}) => (
          <div style={maskStyle}>
            <form onSubmit={this.handleSubmit}>
              <Input
                placeholder={placeholder}
                value={this.state.inputValue}
                style={{transform: `translateX(${(1 - t) * 200}px)`}}
                onChange={this.handleChange}
              />
            </form>
            <Button
              {...button}
              icon={{
                name: 'add',
                style: {transform: `rotate(${t * finalRotation}deg)`},
              }}
              onClick={() => this.toggleOpen()}
            />
          </div>
        )}
      </Motion>
    );
  }
}

export default SliderInput;
