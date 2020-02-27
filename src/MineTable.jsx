import React, { useContext, memo } from 'react';
import MineTr from './MineTr';
import { TableContext } from './MineSearch';

const MineTable = memo(() => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      <tbody>
        {Array(tableData.length).fill().map((tr, i) => (
          <MineTr key={i} rowIndex={i} />
        ))}
      </tbody>
    </table>
  );
});

export default MineTable;
