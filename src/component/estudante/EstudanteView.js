import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from '../common/Search';

const EstudanteView = () => {
  const [estudantes, setEstudantes] = useState([]);
  const [search, setSearch] = useState(''); // Estado para armazenar o valor da pesquisa

  // Carregar os estudantes quando o componente for montado
  useEffect(() => {
    loadEstudantes();
  }, []);

  // Função para carregar os estudantes
  const loadEstudantes = async () => {
    const result = await axios.get('http://localhost:8080/estudantes');
    setEstudantes(result.data);
  };

  // Função para excluir um estudante
  const deleteEstudante = async (id) => {
    await axios.delete(`http://localhost:8080/estudantes/delete/${id}`);
    loadEstudantes(); // Recarregar a lista de estudantes após a exclusão
  };

  return (
    <section>
      <Search search={search} setSearch={setSearch} />
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
          {estudantes
            .filter((st) => st.nome.toLowerCase().includes(search))
            .map((estudante, index) => (
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
                    to={`/edit-student/${estudante.id}`}
                    className="btn btn-warning"
                  >
                    Atualizar
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEstudante(estudante.id)}
                  >
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
