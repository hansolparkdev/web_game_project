/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useCallback, useRef, useEffect, memo,
} from 'react';
import { CLICK_CELL } from './TicTacToe';

const Td = memo(({
  rowIndex, cellIndex, dispatch, cellData,
}) => {
  // console.log('td rendered');
  // const ref = useRef([]);
  // useEffect(() => {
  //   console.log(
  //     rowIndex === ref.current[0],
  //     cellIndex === ref.current[1],
  //     dispatch === ref.current[2],
  //     cellData === ref.current[3],
  //   );
  //   ref.current = [rowIndex, cellIndex, dispatch, cellData];
  // }, [rowIndex, cellIndex, dispatch, cellData]);

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  );
});


export default Td;
