/* eslint-disable react/prop-types */
import React from 'react';
import Td from './Td';

const Tr = ({ rowData, rowIndex }) => (
  <tr>
    {Array(rowData.length).fill().map((td, i) => (<Td key={`${i + 1}`} rowIndex={rowIndex} cellIndex={i} />))}
  </tr>
);

export default Tr;
