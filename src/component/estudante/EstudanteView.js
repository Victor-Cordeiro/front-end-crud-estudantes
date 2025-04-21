import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EstudanteView = () => {
  const [estudantes, setEstudantes] = useState([]);

  // Carregar os estudantes quando o componente for montado
  useEffect(() => {
    loadEstudantes();
  }, []);

  // Função para carregar os estudantes
  const loadEstudantes = async () => {
    const result = await axios.get('http://localhost:8080/estudantes');
    setEstudantes(result.data);
  };

  return (
    <section>
      <table className="table table-bordered table-hover shadow-lg ">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>Curso</th>
            <th colSpan="3">Ações</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {estudantes.map((estudante, index) => (
            <tr key={estudante.id}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{estudante.nome}</td>
              <td>{estudante.sobrenome}</td>
              <td>{estudante.email}</td>
              <td>{estudante.curso}</td>
              <td className="mx-2">
                <Link
                  to={`/studente-profile/${estudante.id}`}
                  className="btn btn-info"
                >
                  Visualizar
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-student/${estudante.id}`}
                  className="btn btn-warning"
                >
                  Atualizar
                </Link>
              </td>
              <td className="mx-2">
                <button className="btn btn-danger">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EstudanteView;
