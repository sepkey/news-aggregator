import axios, { AxiosInstance } from 'axios';

const NEWSAPI_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const NEWSAPI_KEY = import.meta.env.VITE_NEWS_API_KEY;
const GUARDIAN_URL = import.meta.env.VITE_THE_GUARDIAN_BASE_URL;
const GUARDIAN_KEY = import.meta.env.VITE_THE_GUARDIAN_KEY;
const NYTIMES_URL = import.meta.env.VITE_NY_TIMES_BASE_URL;
const NYTIMES_KEY = import.meta.env.VITE_NY_TIMES_KEY;

const createAxiosClient = (
  baseURL: string,
  params: Record<string, string>
): AxiosInstance => {
  if (!baseURL || !params) {
    throw new Error('Base URL or API key is missing in environment variables.');
  }
  return axios.create({ baseURL, params });
};

export const newsApiClient = createAxiosClient(NEWSAPI_URL, {
  apiKey: NEWSAPI_KEY,
});

export const theGuardianClient = createAxiosClient(GUARDIAN_URL, {
  'api-key': GUARDIAN_KEY,
});

export const nyTimesClient = createAxiosClient(NYTIMES_URL, {
  'api-key': NYTIMES_KEY,
});
