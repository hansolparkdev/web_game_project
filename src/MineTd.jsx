/* eslint-disable no-useless-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useContext, useCallback, memo, useMemo,
} from 'react';
import {
  TableContext, CODE, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL,
} from './MineSearch';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: '#444',
      };
    case CODE.CLICKED_MINE:
    case CODE.OPEND:
      return {
        background: 'white',
      };
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: 'red',
      };
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: 'yellow',
      };
    default:
      return {
        background: 'white',
      };
  }
};

const getTdText = (code) => {
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'X';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return '!';
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return '?';
    default:
      return code || '';
  }
};
const MineTd = memo(({ rowIndex, cellIndex }) => {
  const { tableData, dispatch, halted } = useContext(TableContext);
  const onClickTd = useCallback(() => {
    console.log('td rendered');
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPEND:
      case CODE.FLAG:
      case CODE.FLAG_MINE:
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        return;
      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback((e) => {
    if (halted) {
      return;
    }
    e.preventDefault();
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.QUESTION:
      case CODE.QUESTION_MINE:
        dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  return useMemo(() => (
    <td
      style={getTdStyle(tableData[rowIndex][cellIndex])}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
    >
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  ), [tableData[rowIndex][cellIndex]]);
});

export default MineTd;
