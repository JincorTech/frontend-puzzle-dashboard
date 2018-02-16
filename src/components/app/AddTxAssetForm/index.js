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
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<button color="primary" className="px-4" disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</button>)
      : (<button color="primary" className="px-4" disabled={invalid}>Add</button>));

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}>
      <div className={s.field}>
        <Field
          component={RenderInput}
          name="quantity"
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
          name="date"
          type="date"
          placeholder="Date"
          validate={required}/>
      </div>

      <div className={s.field}>
        <Field
          component={RenderSelect}
          clearable={false}
          searchable={false}
          placeholder="Select exchange..."
          options={[
            { value: '0x00', label: 'Bittrex' },
            { value: '0x01', label: 'Poloniex' }
          ]}
          name="exchange"/>
      </div>

      {renderButton()}
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'addTxAsset',
  initialValues: {
    quantity: ''
  }
})(AddTxAssetForm);

export default FormComponent;
