import React, {
  Fragment, useState, useRef, memo,
} from 'react';

const Gugudan = memo(() => {
  const [num1, setNum1] = useState(Math.ceil(Math.random() * 9));
  const [num2, setNum2] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === num1 * num2) {
      setResult(`정답 ${value}`);
      setNum1(Math.ceil(Math.random() * 9));
      setNum2(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult(`${value} 오답`);
      setValue('');
      inputRef.current.focus();
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h3>Hello 구구단</h3>
        <p>{`${num1}x${num2}=`}</p>
        <input ref={inputRef} type="text" onChange={onChange} value={value} />
        <button type="submit">입력</button>
        <p>{result}</p>
      </form>
    </Fragment>
  );
});

export default Gugudan;
