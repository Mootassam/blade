/* eslint-disable react-refresh/only-export-components */
import { connectRouter } from "connected-react-router";
import auth from "src/modules/auth/authReducers";
import tenant from "src/modules/tenant/tenantReducers";
import user from "src/modules/user/userReducers";
import category from "src/modules/category/categoryReducers";
import company from "src/modules/company/companyReducers";
import vip from "src/modules/vip/vipReducers"
import record from 'src/modules/record/recordReducers'
import product from 'src/modules/product/list/productListReducers'
import transaction from 'src/modules/transaction/transactionReducers'
import { combineReducers } from "redux";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    category,
    company,
    vip,
    transaction,
    product, 
    record,
    tenant,
    user,
  });
