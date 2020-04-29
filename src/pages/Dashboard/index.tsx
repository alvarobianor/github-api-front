import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import imgLogo from '../../assets/dashboard-logo.svg';

// last thing to import
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={imgLogo} alt="Github Logo" />
      <Title>Explore repositórios no GitHub :D</Title>
      <Form>
        <input placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/19610639?s=460&u=beeb3184574cb7862579a00ccfe2dfc935b6f00e&v=4"
            alt="Álvaro Bianor"
          />
          <div>
            <strong>alvarobianor/cursomc</strong>
            <p>Curso de Java FullStack</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/40062831?s=460&u=725b18e6089c126558a6178a66440a6222b2a112&v=4"
            alt="Letícia Farias"
          />
          <div>
            <strong>LeticiaFarias/FBD</strong>
            <p>Fundamentos de banco de dados</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/5387202?s=460&u=0306cf399e36a360d9cbc0ca3815eb003723974d&v=4"
            alt="Emerson Vieira"
          />
          <div>
            <strong>mensonones/QueroWorkar</strong>
            <p>
              App que disponibiliza a visualização das vagas do site QueroWorkar
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
