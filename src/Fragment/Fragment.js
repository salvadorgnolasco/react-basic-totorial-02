
import React, { Component } from 'react';
import './fragment.scss';


export default class Fragment extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  handleOnClickAtDecrease = () => {
    console.log('[1] this.state.count', this.state.count);
    this.setState((state, props) => {
      return {count: state.count -1}
    });
    this.setState((state, props) => {
      return {count: state.count -1}
    });
    console.log('[3] this.state.count', this.state.count);
  }

  handleOnClickAtIncrease = () => {
    console.log('[1] this.state.count', this.state.count);
    this.setState({
      count: this.state.count + 1,
    }, () => { console.log('[2] this.state.count', this.state.count) });
    console.log('[3] this.state.count', this.state.count);
  }

  render() {
    console.log('Render -- this.state.count', this.state.count);
    return (
      <>
        <div className="counter">
          <button onClick={this.handleOnClickAtDecrease}>decrease</button>
          <span>Counter: {this.state.count}</span>
          <button onClick={this.handleOnClickAtIncrease}>increase</button>
        </div>
      </>
    )
  }
}
