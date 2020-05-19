import apiClient from './apiClient';
import { ICard } from '../../modules/card';

export const getCardData = async (url: string): Promise<ICard[]> => {
  const response = await apiClient.get(`${url}`);

  return response.data.data;
};
