import type { GithubLicense } from "./GithubLicense";
import type { GithubRepoOwner } from "./GithubRepoOwner";

export interface GithubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GithubRepoOwner;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;  // ISO date
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
  license: GithubLicense | null;
  topics: string[];
  visibility: string;
}