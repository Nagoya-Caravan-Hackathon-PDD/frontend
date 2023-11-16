'use client';

import aspida from '@aspida/axios';
import axios from 'axios';
import { ReactNode, createContext, useContext } from 'react';
import { useAuth } from '@/shared/components/hooks/auth';
import api from 'api/$api';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
});
const apiType = api(aspida(axiosInstance));
type Api = typeof apiType;

type AxiosContextValue = {
  api?: Api;
};
const AxiosContext = createContext<AxiosContextValue>({});

type Props = {
  children: ReactNode;
};
export const AxiosProvider = ({ children }: Props) => {
  const { currentUser } = useAuth();

  const headers =
    currentUser?.token == null
      ? undefined
      : { Authorization: `Bearer ${currentUser.token}` };

  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
    headers: headers,
  });

  return (
    <AxiosContext.Provider value={{ api: api(aspida(axiosInstance)) }}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useApiClient = () => useContext(AxiosContext);