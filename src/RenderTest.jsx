/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';

class RenderTest extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      string: 'hello',
      number: 1,
      boolean: true,
      object: {},
      array: [],
    };
    this.onClick = this.onClick.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;
  // }

  onClick() {
    this.setState({
      array: [...this.state.array, 1],
    });
  }

  render() {
    console.log('랜더링', this.state);
    return (
      <div>
        <button onClick={this.onClick} type="button">클릭</button>
      </div>
    );
  }
}

export default RenderTest;
