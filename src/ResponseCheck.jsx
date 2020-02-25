/* eslint-disable react/sort-comp */
import React, { Fragment, useState, useRef } from 'react';
// import React, { Component, Fragment, useState, useRef } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onReset = () => {
    setResult([]);
  };

  const renderAverage = () => (
    result.length === 0
      ? null
      : (
        <div>
          <h1>{`평균시간 : ${result.reduce((a, c) => a + c) / result.length}ms`}</h1>
          <button onClick={onReset} type="button">Reset</button>
        </div>
      )
  );

  const onClickScreen = () => {
    // const { state } = this.state;
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요');
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') {
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요');
    } else if (state === 'now') {
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevState) => [...prevState, endTime.current - startTime.current]);
    }
  };
  const downHandler = () => {
    console.log('down');
  };

  return (
    <Fragment>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
        onKeyDown={downHandler}
        role="button"
        tabIndex={0}
      >
        {message}
      </div>
      {renderAverage()}
    </Fragment>
  );
};
// class ResponseCheck extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       state: 'waiting',
//       message: '클릭해서 시작하세요',
//       result: [],
//     };
//     this.onClickScreen = this.onClickScreen.bind(this);
//     this.renderAverage = this.renderAverage.bind(this);
//     this.onReset = this.onReset.bind(this);
//   }

//   timeout;

//   startTime;

//   endTime;

//   onReset() {
//     this.setState({
//       result: [],
//     });
//   }

//   onClickScreen() {
//     const { state } = this.state;
//     if (state === 'waiting') {
//       this.setState({
//         state: 'ready',
//         message: '초록색이 되면 클릭하세요',
//       });
//       this.timeout = setTimeout(() => {
//         this.setState({
//           state: 'now',
//           message: '지금 클릭',
//         });
//         this.startTime = new Date();
//       }, Math.floor(Math.random() * 1000) + 2000);
//     } else if (state === 'ready') {
//       clearTimeout(this.timeout);
//       this.setState({
//         state: 'waiting',
//         message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요',
//       });
//     } else if (state === 'now') {
//       this.endTime = new Date();
//       this.setState((prevState) => ({
//         state: 'waiting',
//         message: '클릭해서 시작하세요',
//         result: [...prevState.result, this.endTime - this.startTime],
//       }));
//     }
//   }

//   renderAverage() {
//     const { result } = this.state;
//     return result.length === 0
//       ? null
//       : (
//         <div>
//           <h1>{`평균시간 : ${result.reduce((a, c) => a + c) / result.length}ms`}</h1>
//           <button onClick={this.onReset} type="button">Reset</button>
//         </div>
//       );
//   }

//   render() {
//     const { state, message } = this.state;
//     return (
//       <Fragment>
//         <div
//           id="screen"
//           className={state}
//           onClick={this.onClickScreen}
//           onKeyDown={this.handleKeyDown}
//           role="button"
//           tabIndex={0}
//         >
//           {message}
//         </div>
//         {this.renderAverage()}
//       </Fragment>
//     );
//   }
// }

export default ResponseCheck;
