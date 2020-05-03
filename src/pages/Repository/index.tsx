import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../service/api';
import { Header, RepositoryInfo, Issue } from './styles';
import imgLogo from '../../assets/dashboard-logo.svg';

interface Params {
  repository: string;
}

interface IssueDTO {
  id: number;
  number: number;
  title: string;
  user: {
    login: string;
    url_avatar: string;
  };
  state: string;
  html_url: string;
}

interface RepositoryDTO {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<Params>();

  // const [alvaromc]: DTO[] = JSON.parse(
  //   localStorage.getItem(`@githubExplore: Repositories`) as string,
  // );
  // my personal code just for test

  const [repository, setRepository] = useState<RepositoryDTO | null>(null);
  const [issue, setIssue] = useState<IssueDTO[]>([]);

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then((result) => setRepository(result.data));

    api
      .get(`repos/${params.repository}/issues`)
      .then((result) => setIssue(result.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={imgLogo} alt="Logo" />
        <Link to="/">
          <FiChevronsLeft size={15} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.full_name} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues/openeds</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issue>
        {issue &&
          issue.map((issueValue) => (
            <>
              <a key={issueValue.id} href={issueValue.html_url}>
                <div>
                  <strong>{issueValue.title}</strong>
                  <p>{issueValue.user.login}</p>
                </div>
                <FiChevronRight size={40} />
              </a>
            </>
          ))}
      </Issue>
    </>
  );
};

export default Repository;

// const [repository, setRepository] = useState<RepositoryDTO>(() => {
//   const savedRepositories = localStorage.getItem(
//     `@githubExplore: Repositories`,
//   ) as string;

//   const repos: RepositoryDTO[] = JSON.parse(savedRepositories);
//   const [repo] = repos.filter((e) => e.full_name === params.repository);
//   return repo;
// });

// const [issues, setIssues] = useState<IssueDTO[]>(() => {
//   const savedIssues = localStorage.getItem(`@githubExplore: Issues`);
//   if (savedIssues) {
//     return JSON.parse(savedIssues);
//   }

//   return [];
// });

// useEffect(() => {
//   async function addIssue(): Promise<IssueDTO[]> {
//     const issuesArray = await api.get<IssueDTO[]>(
//       `repos/${params.repository}/issues`,
//     );
//     // console.log('issueeee', issues);
//     return issuesArray.data;
//   }
//   const issueArray = addIssue();
//   Promise.all([issueArray]).then((value) => {
//     const [issueValue] = value;
//     localStorage.setItem(
//       '@githubExplore: Issues',
//       JSON.stringify(issueValue),
//     );
//   });
//   console.log(repository, params.repository);
// }, []);
