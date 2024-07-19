import ApiResponseHandler from '../apiResponseHandler';
import CategoryService from '../../services/categoryService';

export default async (req, res, next) => {
  try {
    const payload = await new CategoryService(req).findcs();

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
