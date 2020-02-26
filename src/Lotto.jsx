/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
// import React, { Component, Fragment } from 'react';
import React, {
  Fragment, useState, useEffect, useRef, memo, useMemo, useCallback,
} from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  const runTimeouts = () => {
    for (let i = 0; i < winNumbers.length - 1; i += 1) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevState) => (
          [...prevState, winNumbers[i]]
        ));
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
  };

  useEffect(() => {
    runTimeouts();
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);


  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, []);

  return (
    <Fragment>
      <h1>로또</h1>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button type="button" onClick={onClickRedo}>한판 더</button>}
    </Fragment>
  );
};

// class Lotto extends Component {
//   state = {
//     winNumbers: getWinNumbers(), // 당첨 숫자들
//     winBalls: [],
//     bonus: null, // 보너스 공
//     redo: false,
//   };

//   timeouts = [];

//   componentDidMount() {
//     this.runTimeouts();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log(prevState);
//     // console.log(prevProps);
//     const { winBalls } = this.state;
//     if (winBalls.length === 0) {
//       this.runTimeouts();
//     }
//   }

//   componentWillUnmount() {
//     this.timeouts.forEach((v) => {
//       console.log(v);
//       clearTimeout(v);
//     });
//   }

//   runTimeouts = () => {
//     const { winNumbers } = this.state;
//     for (let i = 0; i < winNumbers.length - 1; i += 1) {
//       this.timeouts[i] = setTimeout(() => {
//         this.setState((prevState) => ({
//           winBalls: [...prevState.winBalls, winNumbers[i]],
//         }));
//       }, (i + 1) * 1000);
//     }
//     this.timeouts[6] = setTimeout(() => {
//       this.setState({
//         bonus: winNumbers[6],
//         redo: true,
//       });
//     }, 7000);
//   }

//   onClickRedo = () => {
//     this.setState({
//       winNumbers: getWinNumbers(), // 당첨 숫자들
//       winBalls: [],
//       bonus: null, // 보너스 공
//       redo: false,
//     });
//     this.timeouts = [];
//   }

//   render() {
//     const { winBalls, bonus, redo } = this.state;
//     return (
//       <Fragment>
//         <h1>로또</h1>
//         <div>당첨 숫자</div>
//         <div id="결과창">
//           {winBalls.map((v) => <Ball key={v} number={v} />)}
//         </div>
//         <div>보너스!</div>
//         {bonus && <Ball number={bonus} />}
//         {redo && <button type="button" onClick={this.onClickRedo}>한판 더</button>}
//       </Fragment>
//     );
//   }
// }

export default Lotto;
