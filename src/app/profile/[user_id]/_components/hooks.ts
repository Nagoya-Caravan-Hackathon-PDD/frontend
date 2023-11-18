import axios from 'axios';
import useSWR from 'swr';

export const useGitHubUser = (githubId: string) => {
  const url = `https://api.github.com/users/${githubId}`;
  return useSWR(url, (url) => axios.get(url).then((res) => res.data));
};
