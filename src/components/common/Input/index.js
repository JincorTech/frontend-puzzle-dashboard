import React from 'react';
import s from './styles.css';

const Input = (props) => {
  const {
    invalid,
    meta,
    ...restProps
  } = props;

  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        {...restProps}/>
    </div>
  );
};

export default Input;
