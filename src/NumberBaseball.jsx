/* eslint-disable no-alert */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
// import React, { Fragment, Component, useState } from 'react';
import React, { Fragment, useState, memo } from 'react';
import Try from './Try';

function getNumbers() { // 숫자 네 개
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = memo(() => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런');
      setTries((prevTries) => [...prevTries, { try: value, result: '홈런!' }]);
      alert('게임을 다시 시작합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      console.log('틀렸습니다.');
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}이었습니다.`);
        alert('게임을 다시 시작합니다.');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼` }]);
        setValue('');
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <Fragment>
      <h2>숫자야구</h2>
      <h2>{ result }</h2>
      <form onSubmit={onSubmitForm}>
        <input type="text" maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>{`시도: ${tries.length}`}</div>
      <ul>
        {tries.map((v, i) => (
          <Try key={`a${i + 1}`} tryinfo={v} />
        ))}
      </ul>
    </Fragment>
  );
});


// class NumberBaseball extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: '',
//       value: '',
//       answer: getNumbers(),
//       tries: [],
//     };
//     this.onChangeInput = this.onChangeInput.bind(this);
//     this.onSubmitForm = this.onSubmitForm.bind(this);
//   }

//   onSubmitForm(e) {
//     e.preventDefault();
//     if (this.state.value === this.state.answer.join('')) {
//       // console.log('홈런');
//       this.setState((prevState) => ({
//         result: '홈런',
//         tries: [...prevState.tries, { try: prevState.value, result: '홈런!' }],
//       }));
//       alert('게임을 다시 시작합니다.');
//       this.setState({
//         value: '',
//         answer: getNumbers(),
//         tries: [],
//       });
//     } else {
//       console.log('틀렸습니다.');
//       const answerArray = this.state.value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (this.state.tries.length >= 9) {
//         this.setState({
//           result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}이었습니다.`,
//         });
//         alert('게임을 다시 시작합니다.');
//         this.setState({
//           value: '',
//           answer: getNumbers(),
//           tries: [],
//         });
//       } else {
//         for (let i = 0; i < 4; i += 1) {
//           if (answerArray[i] === this.state.answer[i]) {
//             strike += 1;
//           } else if (this.state.answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         this.setState((prevState) => ({
//      tries: [...prevState.tries, { try: prevState.value, result: `${strike} 스트라이크, ${ball} 볼` }],
//           value: '',
//         }));
//       }
//     }
//   }

//   onChangeInput(e) {
//     console.log(this.state.answer);
//     this.setState({
//       value: e.target.value,
//     });
//   }

//   render() {
//     return (
//       <Fragment>
//         <h2>숫자야구</h2>
//         <h2>{ this.state.result }</h2>
//         <form onSubmit={this.onSubmitForm}>
//       <input type="text" maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
//           <button type="submit">입력</button>
//         </form>
//         <div>{`시도: ${this.state.tries.length}`}</div>
//         <ul>
//           {this.state.tries.map((v, i) => (
//             <li key={`${v.try + i}`}>
//               <b>{v.try}</b>
//               {`${v.result}`}
//             </li>
//           ))}
//         </ul>
//       </Fragment>
//     );
//   }
// }

export default NumberBaseball;
