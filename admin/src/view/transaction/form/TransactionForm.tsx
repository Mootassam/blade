import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import transactionEnumerators from 'src/modules/transaction/transactionEnumerators';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import Storage from 'src/security/storage';

const schema = yup.object().shape({
  status: yupFormSchemas.enumerator(
    i18n('entities.transaction.fields.status'),
    {
      options: transactionEnumerators.status,
    },
  ),

  user: yupFormSchemas.relationToOne(
    i18n('entities.transaction.fields.user'),
    {
      required: true,
    },
  ),

  type: yupFormSchemas.enumerator(
    i18n('entities.transaction.fields.type'),
    {
      options: transactionEnumerators.type,
    },
  ),
  amount: yupFormSchemas.decimal(
    i18n('entities.transaction.fields.amount'),
    {
      required: true,
    },
  ),
});

function TransactionForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};
    return {
      status: record.status || [],
      datetransaction: record.datetransaction || new Date(),
      user: record.user ,
      type: record.type,
      amount: record.amount || 0,
      photo: record.photo,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="status"
                label={i18n(
                  'entities.transaction.fields.status',
                )}
                options={transactionEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.transaction.enumerators.status.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem
                name="user"
                label={i18n(
                  'entities.transaction.fields.user',
                )}
                required={true}
              />
            </div>

            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="type"
                label={i18n(
                  'entities.transaction.fields.type',
                )}
                options={transactionEnumerators.type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.transaction.enumerators.type.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>

            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="amount"
                label={i18n(
                  'entities.transaction.fields.amount',
                )}
                required={true}
              />
            </div>

            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="photo"
                label={i18n('user.fields.photo')}
                storage={Storage.values.galleryPhotos}
                max={2}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />
              &nbsp;
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>
              &nbsp;
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>&nbsp;
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default TransactionForm;
