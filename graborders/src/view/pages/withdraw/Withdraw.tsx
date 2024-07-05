import React, { useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import authSelectors from "src/modules/auth/authSelectors";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import InputFormItem from "src/shared/form/InputFormItem";
import actions from "src/modules/transaction/form/transactionFormActions";
import authActions from "src/modules/auth/authActions";
const schema = yup.object().shape({
  amount: yupFormSchemas.integer(i18n("entities.transaction.fields.amount"), {
    required: true,
    min: 20,
  }),
  withdrawPassword: yupFormSchemas.string(
    i18n("user.fields.withdrawPassword"),
    {
      required: true,
    }
  ),
});

function Withdraw() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();
  useEffect(() => {}, [currentUser]);
  const onSubmit = ({ amount, withdrawPassword }) => {
    const values = {
      status: "pending",
      date: new Date(),
      user: currentUser ? currentUser.id : null,
      type: "withdraw",
      amount: amount,
      vip: currentUser,
      withdrawPassword: withdrawPassword,
    };
    dispatch(authActions.doRefreshCurrentUser());
    dispatch(actions.doCreate(values));
  };

  const [initialValues] = useState({
    amount: "",
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  return (
    <div>
      <SubHeader title="WithDraw" path="/" />
      <div className="withdraw__page">
        <div className="withdraw__content">
          <div className="withdraw__header">
            <h3 className="hall" style={{ paddingTop: 0 }}>
              Withdraw Amount:
            </h3>

            <span style={{ color: "black", fontSize: "14px" }}>
              Availabe balance : {currentUser?.balance?.toFixed(2) || 0} Usdt
            </span>
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <InputFormItem
                  type="text"
                  name="amount"
                  placeholder={i18n("entities.transaction.fields.amount")}
                  className="input__withdraw"
                />
                <div className="number__click">
                  <h3 className="hall" style={{ paddingTop: 0 }}>
                    Withdraw Password:
                  </h3>
                  <InputFormItem
                    type="text"
                    name="withdrawPassword"
                    placeholder={i18n("user.fields.withdrawPassword")}
                    className="input__withdraw"
                  />
                </div>

                {currentUser.withdraw ? (
                  <button className="confirm" type="submit">
                    Confirm
                  </button>
                ) : (
                  <button className="confirm" disabled={true}>
                    Confirm
                  </button>
                )}
              </div>
            </form>
          </FormProvider>
        </div>

        <div className="withdraw__rules">
          <div className="rules__title">Rules Description</div>

          <ul className="rules__list">
            <li>(1) minimum withdraw is 20 USDT</li>
            <li>
              (2) The payment shall be made with 48 hours after withdrawal
              application is approved
            </li>
            <li>
              (3) incomplete daily order submission is subjected to no
              withdrawal, all products must be submitted for withdrawal
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
