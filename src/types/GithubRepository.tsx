export type GithubRepository = {
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
    created_at: string; 
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

export type GithubRepoOwner ={
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  html_url: string;
  type: string;
  site_admin: boolean;
}

export type GithubLicense = {
  key: string;
  name: string;
  spdx_id: string;
  url: string | null;
  node_id: string;
}