import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import imgLogo from '../../assets/dashboard-logo.svg';

import api from '../../service/api';

// last thing to import
import { Title, Form, Repositories } from './styles';

interface RepositoryDTO {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<RepositoryDTO[]>([]);

  async function AddRepositori(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault(); // dont refresh the page when submit

    const service = await api.get<RepositoryDTO>(`/repos/${newRepo}`);

    const repository = service.data;
    setRepositories([...repositories, repository]);
    setNewRepo('');

    console.log(repository);
  }

  return (
    <>
      <img src={imgLogo} alt="Github Logo" />
      <Title>Explore repositórios no GitHub :D</Title>
      <Form onSubmit={AddRepositori}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.currentTarget.value)}
          placeholder="Digite aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map((res) => (
          <a key={res.full_name} href="teste">
            <img src={res.owner.avatar_url} alt="Álvaro Bianor" />
            <div>
              <strong>{res.full_name}</strong>
              <p>{res.description}</p>
            </div>
            <FiChevronRight size={40} />
          </a>
        ))}
      </Repositories>

      {/* <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/19610639?s=460&u=beeb3184574cb7862579a00ccfe2dfc935b6f00e&v=4"
            alt="Álvaro Bianor"
          />
          <div>
            <strong>alvarobianor/cursomc</strong>
            <p>Curso de Java FullStack</p>
          </div>
          <FiChevronRight size={40} />
        </a>
      </Repositories> */}
    </>
  );
};

export default Dashboard;
