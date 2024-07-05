import Errors from 'src/modules/shared/error/errors';
import ProductService from 'src/modules/product/productService';

const prefix = 'PRODUCT_LIST';

const productListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,


  doFetch:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: productListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });
        const response = await ProductService.list();

        dispatch({
          type: productListActions.FETCH_SUCCESS,
          payload: response
        });
        
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: productListActions.FETCH_ERROR,
        });
      }
    },
};

export default productListActions;
