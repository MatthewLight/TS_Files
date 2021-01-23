import { Request, Response } from 'express';
import fetch from 'node-fetch';

export const getCoronaStats = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response = await fetch('https://api.covid19api.com/summary');
    const jsonData = await response.json();
    
    return res.json(jsonData);
  } catch (error) {
    return res.json({ msg: 'Error' });
  }
};
