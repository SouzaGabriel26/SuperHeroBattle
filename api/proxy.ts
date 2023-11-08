import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const response = await axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans/');
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
};
