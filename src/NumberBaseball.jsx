/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Fragment, Component } from 'react';

function getNumbers() { // 숫자 네 개

}
class NumberBaseball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      value: '',
      answer: getNumbers(),
      tries: [],
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  }

  onChangeInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <Fragment>
        <h2>숫자야구</h2>
        <h2>{ this.state.result }</h2>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
          <button type="submit">입력</button>
        </form>
        <div>{`시도: ${this.state.tries.length}`}</div>
        <ul>
          {[
            { fruit: '사과', taste: '맛있다' },
            { fruit: '바나나', taste: '맛없다.' },
            { fruit: '포도', taste: '시다.' },
          ].map((v, i) => (
            <li key={v.fruit + v.taste}>
              <b>{v.fruit}</b>
              {`-${i}`}
            </li>
          ))}
          {/*
          {[
            ['사과', '맛있다.'],
            ['바나나', '맛없다.'],
            ['포도', '시다.'],
          ].map((v) => (
            <li>
              <b>{v[0]}</b>
              {v[1]}
            </li>
          ))}
          */}
        </ul>
      </Fragment>
    );
  }
}

export default NumberBaseball;
