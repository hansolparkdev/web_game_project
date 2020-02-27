import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch, Link,
} from 'react-router-dom';
import Gugudan from './Gugudan';
import NumberBaseball from './NumberBaseball';
import WordRelay from './WordRelay';
import RSP from './RSP';
import Lotto from './Lotto';
import TicTacToe from './TicTacToe';
import MineSearch from './MineSearch';
import ResponseCheck from './ResponseCheck';


// BrowserRouter
// hashRouter
const Games = () => (
  <Fragment>
    <Router>
      <Link to="/gugudan">구구단</Link>
      <Link to="/number-baseball">숫자 야구</Link>
      <Link to="/word-relay">끝말 잇기</Link>
      <Link to="/rsp">가위바위보</Link>
      <Link to="/lotto">로또</Link>
      <Link to="/tic-tac-toe">틱택토</Link>
      <Link to="/mine-search">지뢰찾기</Link>
      <Link to="/response-check">반응 속도 체크</Link>
      <Switch>
        <Route path="/gugudan" component={Gugudan} />
        <Route path="/number-baseball" component={NumberBaseball} />
        <Route path="/word-relay" component={WordRelay} />
        <Route path="/rsp" component={RSP} />
        <Route path="/lotto" component={Lotto} />
        <Route path="/tic-tac-toe" component={TicTacToe} />
        <Route path="/mine-search" component={MineSearch} />
        <Route path="/response-check" component={ResponseCheck} />
      </Switch>
    </Router>
    <style jsx="true">
      {`
        a{
          margin:0 10px;
        }
      `}
    </style>
  </Fragment>
);

export default Games;
