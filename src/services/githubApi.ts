import axios from "axios";
import type { GithubRepository } from '../types/GithubRepository';

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Accept": "application/vnd.github+json",
    "User-Agent": "my-app-client"
  }
});

export async function getUserRepos(user: string): Promise<GithubRepository[]> {
  const { data } = await api.get<GithubRepository[]>(`/users/${user}/repos`, {
    params: {
      sort: "created",
      direction: "desc",
      per_page: 100
    }
  });
  return data;
}
