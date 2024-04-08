import axiosHandler from '../axiosHandler/axiosHandler';

const login = async (payload) => {
  try {
    const response = await axiosHandler.post('/auth/login', payload);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message || "Login failed");
  }
};

export default login;
