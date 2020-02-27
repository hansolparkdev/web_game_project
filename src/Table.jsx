/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo } from 'react';
import Tr from './Tr';

const Table = ({ tableData, dispatch }) => (
  <table>
    {Array(tableData.length).fill().map((tr, i) => (
      useMemo(
        () => <Tr key={`${i + 1}`} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />,
        [tableData[i]],
      )
    ))}
  </table>
);

export default Table;
