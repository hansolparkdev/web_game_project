/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
// import React, { Component, Fragment } from 'react';
import React, {
  Fragment, useState, useRef, useEffect, memo,
} from 'react';

// 클래스의 경우 => constructor => render -> ref -> componentDidMount ->
// setState/props 바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 자식 컴포넌트를 제거할 때 -> componentDidUnmount -> 소멸

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  보: 1,
  가위: 0,
  바위: -1,
};

const computerChoice = (imgCoord) => Object.entries(rspCoords).find((v) => v[1] === imgCoord)[0];

const RSP = memo(() => {
  const [result, setResult] = useState('');
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef();

  const ChangeHandle = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  useEffect(() => { // componentDidMount, componentDidUpdate
    interval.current = setInterval(ChangeHandle, 100);
    return () => {
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult('비겼습니다.');
    } else if ([-1, 2].includes(diff)) {
      setResult('이겼습니다.');
      setScore((prevState) => prevState + 1);
    } else {
      setResult('졌습니다.');
      setScore((prevState) => prevState - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(ChangeHandle, 100);
    }, 2000);
  };

  return (
    <Fragment>
      <h1>가위바위보</h1>
      <div
        id="computer"
        style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`, width: '142px', height: '210px' }}
      />
      <div>
        <button type="button" id="rock" onClick={onClickBtn('바위')}>바위</button>
        <button type="button" id="scissor" onClick={onClickBtn('가위')}>가위</button>
        <button type="button" id="paper" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{ result }</div>
      <div>{`현재 ${score}점`}</div>
    </Fragment>
  );
});
// class RSP extends Component {
//   state = {
//     result: '',
//     score: 0,
//     imgCoord: '0',
//   }

//   interval;

//   componentDidMount() { // 렌더링 된 후 -> 비동기 요청 많이
//     this.interval = setInterval(this.ChangeHandle, 100);
//   }

//   componentDidUpdate() { // 리렌더링 후

//   }

//   componentWillUnmount() { // 제거되기 직전 -> 비동기 요청 정리
//     clearInterval(this.interval);
//   }

//   ChangeHandle = () => {
//     const { imgCoord } = this.state;
//     if (imgCoord === rspCoords.바위) {
//       this.setState({
//         imgCoord: rspCoords.가위,
//       });
//     } else if (imgCoord === rspCoords.가위) {
//       this.setState({
//         imgCoord: rspCoords.보,
//       });
//     } else if (imgCoord === rspCoords.보) {
//       this.setState({
//         imgCoord: rspCoords.바위,
//       });
//     }
//   }

//   onClickBtn = (choice) => () => {
//     const { imgCoord } = this.state;
//     console.log(imgCoord);
//     clearInterval(this.interval);
//     const myScore = scores[choice];
//     const cpuScore = scores[computerChoice(imgCoord)];
//     const diff = myScore - cpuScore;
//     if (diff === 0) {
//       this.setState({
//         result: '비겼습니다.',
//       });
//     } else if ([-1, 2].includes(diff)) {
//       this.setState((prevState) => ({
//         result: '이겼습니다.',
//         score: prevState.score + 1,
//       }));
//     } else {
//       this.setState((prevState) => ({
//         result: '졌습니다.',
//         score: prevState.score - 1,
//       }));
//     }
//     setTimeout(() => {
//       this.interval = setInterval(this.ChangeHandle, 100);
//     }, 2000);
//   }

//   render() {
//     const { result, score, imgCoord } = this.state;
//     return (
//       <Fragment>
//         <h1>가위바위보</h1>
//         <div
//           id="computer"
//           style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`, width: '142px', height: '210px' }}
//         />
//         <div>
//           <button type="button" id="rock" onClick={this.onClickBtn('바위')}>바위</button>
//           <button type="button" id="scissor" onClick={this.onClickBtn('가위')}>가위</button>
//           <button type="button" id="paper" onClick={this.onClickBtn('보')}>보</button>
//         </div>
//         <div>{ result }</div>
//         <div>{`현재 ${score}점`}</div>
//       </Fragment>
//     );
//   }
// }

export default RSP;
