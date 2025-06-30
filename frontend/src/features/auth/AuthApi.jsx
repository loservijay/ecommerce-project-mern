import { axiosi } from '../../config/axios';

export const signup = async (cred) => {
  try {
    const res = await axiosi.post('/auth/signup', cred);
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: 'Signup failed' };
  }
};

export const login = async (cred) => {
  try {
    const res = await axiosi.post('/auth/login', cred);
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: 'Login failed' };
  }
};

export const verifyOtp = async (cred) => {
  try {
    const res = await axiosi.post('/auth/verify-otp', cred);
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: 'OTP verification failed' };
  }
};

export const resendOtp = async (cred) => {
  try {
    const res = await axiosi.post('/auth/resend-otp', cred);
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: 'OTP resend failed' };
  }
};

export const forgotPassword = async (cred) => {
  try {
    const res = await axiosi.post('/auth/forgot-password', cred);
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: 'Forgot password failed' };
  }
};

export const resetPassword = async (cred) => {
  try {
    const res = await axiosi.post('/auth/reset-password', cred);
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: 'Reset password failed' };
  }
};

export const checkAuth = async () => {
  try {
    const res = await axiosi.get('/auth/check-auth');
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: 'Auth check failed' };
  }
};

export const logout = async () => {
  try {
    const res = await axiosi.get('/auth/logout');
    return res.data;
  } catch (error) {
    throw error?.response?.data || { message: 'Logout failed' };
  }
};

