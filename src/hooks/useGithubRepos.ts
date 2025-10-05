import { useEffect, useState } from "react";
import type { GithubRepository } from '../types/GithubRepository';
import { getUserRepos } from "../services/githubApi";

export function useGithubRepos(user: string) {
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getUserRepos(user)
      .then(setRepos)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [user]);

  return { repos, loading, error };
}
