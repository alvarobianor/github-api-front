import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issue } from './styles';
import imgLogo from '../../assets/dashboard-logo.svg';

interface Params {
  repository: string;
}

interface DTO {
  name: string;
  full_name: string;
}

const Repository: React.FC = () => {
  // const { params } = useRouteMatch<Params>();

  // const [alvaromc]: DTO[] = JSON.parse(
  //   localStorage.getItem(`@githubExplore: Repositories`) as string,
  // );
  // my personal code just for test

  return (
    <>
      <Header>
        <img src={imgLogo} alt="Logo" />
        <Link to="/">
          <FiChevronsLeft size={15} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/19610639?s=460&u=beeb3184574cb7862579a00ccfe2dfc935b6f00e&v=4"
            alt="teste"
          />
          <div>
            <strong>Title</strong>
            <p>SubTiTle</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>980</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>86</strong>
            <span>Commits</span>
          </li>
          <li>
            <strong>456</strong>
            <span>Issues/openeds</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issue>
        <Link to="fsodfsodf">
          <div>
            <strong>dfdsf</strong>
            <p>sodfsdoifsdofi</p>
          </div>
          <FiChevronRight size={40} />
        </Link>
      </Issue>
    </>
  );
};

export default Repository;
