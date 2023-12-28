import { apis } from "service";

const COMMON_URL = `https://d595-2804-29b8-500b-13b-147e-6b7e-44cf-5769.ngrok-free.app/api/pessoas/`;

const API_URLS = { POST_PESSOAS_API: `${COMMON_URL}` };

export const postPessoasApi = (payload) =>
  apis.post(API_URLS.POST_PESSOAS_API, payload);
