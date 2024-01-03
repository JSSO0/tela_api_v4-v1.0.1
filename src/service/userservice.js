import axios from 'axios';

const COMMON_URL = `https://b802-2804-29b8-500b-13b-d4da-d416-daaf-cb2c.ngrok-free.app/api/pessoas/`;

const API_URLS = {
  POST_PESSOAS_API: `${COMMON_URL}`,
};

export const createUser = async (userData) => {
  try {
    const url = API_URLS.POST_PESSOAS_API;
    console.log('API URL:', url);

    const response = await axios.post(
      url,
      userData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('API response:', response.data);

    // Retorne os dados do usuário criado
    return response.data;
  } catch (error) {
    // Se houver um erro, lance para que seja tratado pelo chamador
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};