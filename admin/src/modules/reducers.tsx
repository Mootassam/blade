import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import numbers from 'src/modules/numbers/numberReducers';
import coupons from 'src/modules/coupons/couponsReducers';
import category from 'src/modules/category/categoryReducers';
import vip from 'src/modules/vip/vipReducers'
import transaction from 'src/modules/transaction/transactionReducers'
import product from 'src/modules/product/productReducers'
import record from 'src/modules/record/recordReducers'
import company from 'src/modules/company/companyReducers';
import { combineReducers } from 'redux';
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    category,
    auth,
    coupons,
    vip,
    record,
    transaction,
    product,
    tenant,
    user,
    company,
    auditLog,
    settings,
    numbers,
    
  });
