import React, { useState, Fragment, useCallback } from 'react';

const Form = () => {
  const [row, setRow] = useState(10);
  const [cell, setCell] = useState(10);
  const [mine, setMine] = useState(20);

  const onChangeRow = useCallback((e) => {
    setRow(e.target.value);
  }, []);

  const onChangeCell = useCallback((e) => {
    setCell(e.target.value);
  }, []);

  const onChangeMine = useCallback((e) => {
    setMine(e.target.value);
  }, []);

  const onClickBtn = useCallback(() => {

  }, []);

  return (
    <Fragment>
      <input type="number" placeholder="가로" value={row} onChange={onChangeRow} />
      <input type="number" placeholder="세로" value={cell} onChange={onChangeCell} />
      <input type="number" placeholder="지뢰" value={mine} onChange={onChangeMine} />
      <button type="button" onClick={onClickBtn}>입력</button>
    </Fragment>
  );
};

export default Form;
