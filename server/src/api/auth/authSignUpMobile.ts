import ApiResponseHandler from '../apiResponseHandler';
import AuthService from '../../services/auth/authService';

export default async (req, res, next) => {
  try {

    
    const payload = await AuthService.signupMobile(
      req.body.email,
      req.body.password,
      req.body.phoneNumber,
      req.body.withdrawPassword,
      req.body.invitationcode,
      req.body.invitationToken,
      req.body.tenantId,
      req,
    );

   
    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
