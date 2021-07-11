import { AxiosResponse } from 'axios';
import fetch from '../utils/fetch';

export type ReposType = { name: string; html_url: string }[];

export default (user: string) =>
  fetch({ url: `https://api.github.com/users/${user}/repos` }).then(
    (res: AxiosResponse<ReposType>) => {
      return res.data;
    }
  );
