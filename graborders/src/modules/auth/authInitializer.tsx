import actions from 'src/modules/auth/authActions';

// eslint-disable-next-line react-refresh/only-export-components
export default (store) => {
  store.dispatch(actions.doInit());
};
