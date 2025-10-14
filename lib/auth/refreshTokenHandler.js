import axios from 'axios';

const getNewTokenWithRefreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_REFRESH_TOKEN_URL,
      {
        refresh: refreshToken
      }
    );
    if (response?.data) {
      return response?.data;
    }
  } catch (error) {
    console.log(error.response?.status, error.response?.data, 'error');
    return {
      access_token: null
    };
  }
};
export default getNewTokenWithRefreshToken;
