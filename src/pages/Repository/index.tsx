import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface Params {
  repository: string;
}

interface DTO {
  name: string;
  full_name: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<Params>();
  const [alvaromc]: DTO[] = JSON.parse(
    localStorage.getItem(`@githubExplore: Repositories`) as string,
  );
  // my personal code just for test

  console.log(alvaromc);
  return <h1>Repository:{`${params.repository} e ${alvaromc.name}`}</h1>;
};

export default Repository;
