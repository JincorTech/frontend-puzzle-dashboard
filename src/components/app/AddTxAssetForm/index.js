import React from 'react';
import { reduxForm, Field } from 'redux-form';

import { required } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderSelect from '../../forms/RenderSelect';

import s from './styles.css';

const AddTxAssetForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error,
    fetching,
    exchanges,
    currencies
  } = props;

  const renderButton = () =>
    (fetching
      ? (<button color="primary" className="px-4" disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</button>)
      : (<button color="primary" className="px-4" disabled={invalid}>Add</button>));

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}>

      {error ? <div className={s.error}>{error}</div> : null}

      <div className={s.field}>
        <Field
          component={RenderSelect}
          clearable={false}
          placeholder="Select asset..."
          valueKey="id"
          labelKey="name"
          options={currencies}
          name="asset"/>
      </div>

      <div className={s.field}>
        <Field
          component={RenderInput}
          name="value"
          type="text"
          placeholder="Quantity"
          validate={required}/>
      </div>

      <div className={s.field}>
        <Field
          component={RenderInput}
          name="price"
          type="text"
          placeholder="Price"
          validate={required}/>
      </div>

      <div className={s.field}>
        <Field
          component={RenderInput}
          name="timestamp"
          type="date"
          placeholder="Date"
          validate={required}/>
      </div>

      <div className={s.field}>
        <Field
          component={RenderSelect}
          clearable={false}
          placeholder="Select exchange..."
          valueKey="id"
          labelKey="name"
          options={exchanges}
          name="exchange"/>
      </div>

      {renderButton()}
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'addTxAsset',
  initialValues: {
    type: 'buy',
    asset: '',
    value: '',
    price: '',
    timestamp: '',
    exchange: ''
  }
})(AddTxAssetForm);

export default FormComponent;
