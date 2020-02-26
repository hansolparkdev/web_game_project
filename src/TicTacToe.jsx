/* eslint-disable no-case-declarations */
/* eslint-disable consistent-return */
import React, {
  Fragment, useState, useReducer, useCallback,
} from 'react';
import Table from './Table';

// 소규모에서는 리덕스는 굳이 안써도 됨
// 비동기 작업할 경우 useReduce는 불편함

const initialState = {
  winner: '',
  turn: '0',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WINNER':
      return {
        ...state,
        winner: action.winner,
      };
    case 'CLICK_CELL':
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 문제 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
      };
    default:
  }
};

const TicTacToe = () => {
  // const [winner, setWinner] = useState();
  // const [turn, setTurn] = useState(0);
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickTable = useCallback(() => {
    console.log('click');
    dispatch({ type: SET_WINNER, winner: '0' });
  }, []);

  return (
    <Fragment>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {state.winner && <div>{`${state.winner}님의 승리`}</div>}
    </Fragment>
  );
};

export default TicTacToe;
