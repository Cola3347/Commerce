
import axios from 'axios';

const API_URL = process.env.API_URL;

export async function signIn({ email, password }) {
  const res = await axios.post(`${API_URL}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}