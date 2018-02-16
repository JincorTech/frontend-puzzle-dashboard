import React from 'react';

import Select from 'react-select';

import '../../../assets/css/react-select.css';

const RenderInput = (props) => {
  const {
    onBlur,
    input,
    meta,
    options,
    ...restProps
  } = props;

  return (
    <Select
      {...restProps}
      className="Select-dark"
      value={input.value}
      onChange={(value) => input.onChange(value.value)}
      onBlur={() => input.onBlur(input.value)}
      options={options}/>
  );
};

export default RenderInput;
