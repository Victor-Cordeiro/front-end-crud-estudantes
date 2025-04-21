import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddEstudante = () => {
  const [estudante, setEstudantes] = React.useState({
    nome: '',
    sobrenome: '',
    email: '',
    curso: '',
  });
  const { nome, sobrenome, email, curso } = estudante;

  const handleInputChange = (e) => {
    setEstudantes({ ...estudante, [e.target.name]: e.target.value });
  };

  const saveEstudante = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      'http://localhost:8080/estudantes',
      estudante,
    );
    if (response.ok) {
      alert('Estudante adicionado com sucesso!');
    } else {
      alert('Erro ao adicionar estudante!');
    }
  };

  return (
    <div className="col-sm-8 py-2 px-5 shadow-lg mx-auto mt-5 bg-light rounded  mb-5">
      <h1 className="text-center">Adicionar Estudante</h1>
      <form className="container mt-5" onSubmit={(e) => saveEstudante(e)}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            name="nome"
            id="nome"
            required
            value={nome}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sobrenome" className="form-label">
            Sobrenome
          </label>
          <input
            type="text"
            className="form-control"
            id="sobrenome"
            name="sobrenome"
            required
            value={sobrenome}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="email" className="input-group-text">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="curso" className="form-label">
            Curso
          </label>
          <input
            type="text"
            className="form-control"
            id="curso"
            name="curso"
            required
            value={curso}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Adicionar Estudante
        </button>
        <button type="reset" className="btn btn-danger mb-3 mx-2">
          Limpar
        </button>
        <Link to={'/view-students'} className="btn btn-secondary mb-3 mx-2">
          Voltar
        </Link>
      </form>
    </div>
  );
};

export default AddEstudante;
