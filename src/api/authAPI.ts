import axiosInstance from './axiosInstance';

export interface LoginResponse {
  status: {
    code: number;
    description: string;
  };
  data: {
    token: string;
  };
}

export const loginAPI = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    console.log('loginAPI email, password', {username: email, password});

    const response = await axiosInstance.post('auth/login', {
      username: email,
      password,
    });
    console.log('response loginAPI', response);
    return response.data;
  } catch (error: any) {
    console.log('error loginAPI', error);

    throw new Error(error);
  }
};
