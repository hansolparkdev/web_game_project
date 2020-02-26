/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Tr from './Tr';

const Table = ({ onClick, tableData }) => (
  <table onClick={onClick}>
    {Array(tableData.length).fill().map((tr, i) => (<Tr key={`${i + 1}`} rowIndex={i} rowData={tableData[i]} />))}
  </table>
);

export default Table;
