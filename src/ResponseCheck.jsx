import React, { Component, Fragment } from 'react';

class ResponseCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'waiting',
      message: '클릭해서 시작하세요',
      result: [],
    };
    this.onClickScreen = this.onClickScreen.bind(this);
    this.renderAverage = this.renderAverage.bind(this);
  }

  onClickScreen() {
    console.log('hi');
    this.setState({});
  }

  renderAverage() {
    const { result } = this.state;
    return result.length === 0
      ? null
      : <h1>{`평균시간 : ${result.reduce((a, c) => a + c) / result.length}ms`}</h1>;
  }

  render() {
    const { state, message } = this.state;
    return (
      <Fragment>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
          onKeyDown={this.handleKeyDown}
          role="button"
          tabIndex={0}
        >
          {message}
        </div>
        {this.renderAverage()}
      </Fragment>
    );
  }
}

export default ResponseCheck;
