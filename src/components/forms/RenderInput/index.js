import React from 'react';

import Input from '../../common/Input';

const RenderInput = (props) => {
  const { input, meta, ...restProps } = props;

  return (
    <Input
      meta={meta}
      {...input}
      {...restProps}/>
  );
};

export default RenderInput;
