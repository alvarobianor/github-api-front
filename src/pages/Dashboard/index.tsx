import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import imgLogo from '../../assets/dashboard-logo.svg';

import api from '../../service/api';

// last thing to import
import { Title, Form, Repositories, Error } from './styles';

interface RepositoryDTO {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<RepositoryDTO[]>(() => {
    const savedRepositories = localStorage.getItem(
      `@githubExplore: Repositories`,
    );
    if (savedRepositories) {
      return JSON.parse(savedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      `@githubExplore: Repositories`,
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function AddRepositori(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault(); // dont refresh the page when submit

    try {
      if (!newRepo) {
        setInputError(`Digit the author/repository in the label`);
        setNewRepo('');
        return;
      }

      const service = await api.get<RepositoryDTO>(`/repos/${newRepo}`);

      const repository = service.data;
      const alredyExists = repositories.filter((e) => e.id === repository.id);

      if (alredyExists.length !== 0) {
        setInputError('Repository alredy exists!');
        setNewRepo('');
        return;
      }
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError(`This repository doesn't exists`);
      setNewRepo('');
    }
  }

  return (
    <>
      <img src={imgLogo} alt="Github Logo" />
      <Title>Explore repositórios no GitHub :D</Title>
      <Form hasError={!!inputError} onSubmit={AddRepositori}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.currentTarget.value)}
          placeholder="Digite aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map((res) => (
          <Link key={res.full_name} to={`/repositories/${res.full_name}`}>
            <img src={res.owner.avatar_url} alt="Álvaro Bianor" />
            <div>
              <strong>{res.full_name}</strong>
              <p>{res.description}</p>
            </div>
            <FiChevronRight size={40} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
