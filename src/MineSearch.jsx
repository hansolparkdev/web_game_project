import React, { useReducer, Fragment } from 'react';
import MineTable from './MineTable';
import Form from './Form';

const initialState = {
  tableData: [],
  timer: 0,
  result: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <Form dispatch={dispatch} />
      <div>{state.timer}</div>
      <MineTable />
      <div>{state.result}</div>
    </Fragment>
  );
};

export default MineSearch;
