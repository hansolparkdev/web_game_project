/* eslint-disable react/sort-comp */
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
    this.onReset = this.onReset.bind(this);
  }

  timeout;

  startTime;

  endTime;

  onReset() {
    this.setState({
      result: [],
    });
  }

  onClickScreen() {
    const { state } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') {
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요',
      });
    } else if (state === 'now') {
      this.endTime = new Date();
      this.setState((prevState) => ({
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [...prevState.result, this.endTime - this.startTime],
      }));
    }
  }

  renderAverage() {
    const { result } = this.state;
    return result.length === 0
      ? null
      : (
        <div>
          <h1>{`평균시간 : ${result.reduce((a, c) => a + c) / result.length}ms`}</h1>
          <button onClick={this.onReset} type="button">Reset</button>
        </div>
      );
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
