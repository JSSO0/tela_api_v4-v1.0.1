// service/userService.js
import { apis } from './api'

const COMMON_URL = `https://d595-2804-29b8-500b-13b-147e-6b7e-44cf-5769.ngrok-free.app/api/pessoas/`

const API_URLS = {
  POST_PESSOAS_API: `${COMMON_URL}`,
}

export const createUser = async (userData) => {
  try {
    // Chame a função da API passando os dados do usuário
    const response = await apis.post(API_URLS.POST_PESSOAS_API, userData)

    // Retorne os dados do usuário criado
    return response.data
  } catch (error) {
    // Se houver um erro, lance para que seja tratado pelo chamador
    throw error
  }
}
