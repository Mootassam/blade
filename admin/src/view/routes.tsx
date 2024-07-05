import Permissions from 'src/security/permissions';
// import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () => import('src/view/company/company'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },
  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/logo',
    loader: () => import('src/view/company/Logo'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/company',
    loader: () => import('src/view/company/company'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/faqs',
    loader: () => import('src/view/company/Faqs'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/companydetail',
    loader: () => import('src/view/company/companyDetails'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/tc',
    loader: () => import('src/view/company/Tc'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/category',
    loader: () =>
      import('src/view/category/list/CategoryListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/category/new',
    loader: () =>
      import('src/view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryCreate,
    exact: true,
  },
  {
    path: '/category/importer',
    loader: () =>
      import(
        'src/view/category/importer/CategoryImporterPage'
      ),
    permissionRequired: permissions.categoryImport,
    exact: true,
  },
  {
    path: '/category/:id/edit',
    loader: () =>
      import('src/view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryEdit,
    exact: true,
  },
  {
    path: '/category/:id',
    loader: () =>
      import('src/view/category/view/CategoryViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  // product routes
  {
    path: '/product',
    loader: () =>
      import('src/view/product/list/ProductListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/product/new',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/product/importer',
    loader: () =>
      import(
        'src/view/product/importer/ProductImporterPage'
      ),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/product/:id/edit',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/product/:id',
    loader: () =>
      import('src/view/product/view/ProductViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  // record routes
  {
    path: '/record',
    loader: () =>
      import('src/view/record/list/RecordListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/record/new',
    loader: () =>
      import('src/view/record/form/RecordFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/record/importer',
    loader: () =>
      import('src/view/record/importer/RecordImporterPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/record/:id/edit',
    loader: () =>
      import('src/view/record/form/RecordFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/record/:id',
    loader: () =>
      import('src/view/record/view/RecordViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  // transaction routes

  {
    path: '/transaction',
    loader: () =>
      import(
        'src/view/transaction/list/TransactionListPage'
      ),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/transaction/new',
    loader: () =>
      import(
        'src/view/transaction/form/TransactionFormPage'
      ),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/transaction/importer',
    loader: () =>
      import(
        'src/view/transaction/importer/TransactionImporterPage'
      ),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/transaction/:id/edit',
    loader: () =>
      import(
        'src/view/transaction/form/TransactionFormPage'
      ),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/transaction/:id',
    loader: () =>
      import(
        'src/view/transaction/view/TransactionViewPage'
      ),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  // vip routes

  {
    path: '/vip',
    loader: () => import('src/view/vip/list/VipListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/vip/new',
    loader: () => import('src/view/vip/form/VipFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/vip/importer',
    loader: () =>
      import('src/view/vip/importer/VipImporterPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/vip/:id/edit',
    loader: () => import('src/view/vip/form/VipFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/vip/:id',
    loader: () => import('src/view/vip/view/VipViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  //  coupons routes

  {
    path: '/coupons',
    loader: () =>
      import('src/view/coupons/list/CouponsListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/coupons/new',
    loader: () =>
      import('src/view/coupons/form/CouponsFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/coupons/importer',
    loader: () =>
      import(
        'src/view/coupons/importer/CouponsImporterPage'
      ),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/coupons/:id/edit',
    loader: () =>
      import('src/view/coupons/form/CouponsFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/coupons/:id',
    loader: () =>
      import('src/view/coupons/view/CouponsViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  {
    path: '/check',
    loader: () => import('src/view/visa/Check'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserDetails'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/paymentsettings',
    loader: () =>
      import(
        'src/view/paymentsettings/list/PaymentsettingsListPage'
      ),
    permissionRequired: permissions.paymentsettingsRead,
    exact: true,
  },
  {
    path: '/paymentsettings/new',
    loader: () =>
      import(
        'src/view/paymentsettings/form/PaymentsettingsFormPage'
      ),
    permissionRequired: permissions.paymentsettingsCreate,
    exact: true,
  },
  {
    path: '/paymentsettings/importer',
    loader: () =>
      import(
        'src/view/paymentsettings/importer/PaymentsettingsImporterPage'
      ),
    permissionRequired: permissions.paymentsettingsImport,
    exact: true,
  },
  {
    path: '/paymentsettings/:id/edit',
    loader: () =>
      import(
        'src/view/paymentsettings/form/PaymentsettingsFormPage'
      ),
    permissionRequired: permissions.paymentsettingsEdit,
    exact: true,
  },
  {
    path: '/paymentsettings/:id',
    loader: () =>
      import(
        'src/view/paymentsettings/view/PaymentsettingsViewPage'
      ),
    permissionRequired: permissions.paymentsettingsRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
