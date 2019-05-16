import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './NumberInput.css';

class NumberInput extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: 0,
    onChange() {}
  };

  change(value) {
    const { onChange } = this.props;
    onChange(value > 0 ? value : 0);
  }

  handleChange = (event) => {
    this.change(Number(event.target.value))
  };

  handleClickPlus = () => {
    const { value } = this.props;
    this.change(value + 1)
  };

  handleClickMinus = () => {
    const { value } = this.props;
    this.change(value - 1)
  };

  render() {
    const { value } = this.props;
    return (
      <div className="number-input">
        <button
          className="increment left"
          onClick={this.handleClickMinus}
        >
          -
        </button>
        <input
          className="input"
          value={value}
          onChange={this.handleChange}
        />
        <button
          className="increment right"
          onClick={this.handleClickPlus}
        >
          +
        </button>
      </div>
    );
  }
}

export default NumberInput;
