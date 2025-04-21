import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import EstudanteView from './component/estudante/EstudanteView';
import NavBar from './component/common/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEstudante from './component/estudante/AddEstudante';
import EditEstudante from './component/estudante/EditEstudante';
import Search from './component/common/Search';

function App() {
  return (
    <main className="container ">
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/view-students"
            element={<EstudanteView />}
          ></Route>

          <Route exact path="/add-student" element={<AddEstudante />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditEstudante />}
          ></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
