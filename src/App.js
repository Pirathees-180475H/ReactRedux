import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//After Router Added Components -> For Now Mount Each Component And Make Work
import Register from './Pages/Register';
import Login from './Pages/Login';
import AdminMainPage from './Pages/AdminMainPage';

function App() {
  return (
    <div className="App">
      <AdminMainPage>
      </AdminMainPage>
    </div>
  );
}

export default App;
