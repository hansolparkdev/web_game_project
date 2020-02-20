/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import React, { Fragment, useState, useRef } from 'react';
// import { Component } from React;

const WordRelay = () => {
  const [word, setWord] = useState('자전거');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('정답');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Fragment>
      <h2>끝말 잇기</h2>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="aa">글자를 입력하세요</label>
        <input id="aa" className="aa" type="text" ref={inputRef} onChange={onChange} value={value} />
        <button type="submit">입력</button>
        <div>{result}</div>
      </form>
    </Fragment>
  );
};
// class WordRelay extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       word: '자전거',
//       value: '',
//       result: '',
//     };
//     this.onSubmit = this.onSubmit.bind(this);
//     this.onChange = this.onChange.bind(this);
//     this.inputRef = React.createRef();
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState((prevState) => ({
//         result: '정답',
//         word: prevState.value,
//         value: '',
//       }));
//       this.inputRef.current.focus();
//     } else {
//       this.setState({
//         result: '땡',
//         value: '',
//       });
//       this.inputRef.current.focus();
//     }
//   }

//   onChange(e) {
//     this.setState({
//       value: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <Fragment>
//         <h2>끝말 잇기</h2>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmit}>
//           <input type="text" ref={this.inputRef} onChange={this.onChange} value={this.state.value} />
//           <button type="submit">입력</button>
//           <div>{this.state.result}</div>
//         </form>
//       </Fragment>
//     );
//   }
// }

export default WordRelay;
