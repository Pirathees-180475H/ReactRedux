import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//After Router Added Components -> For Now Mount Each Component And Make Work
import Register from './Pages/Register';
import Login from './Pages/Login';
import AdminMainPage from './Pages/AdminMainPage';
import PageNotFound from './Pages/PageNotFound';

import AdminDonorManagement from './Pages/AdminDonorManagement/AdminDonorManagement';
import AdminHospitalManagement from './Pages/AdminHospitalManagement/AdminHospitalManagement';
import ViewHospitals from './Pages/AdminHospitalManagement/ViewHospitals';
import AddHospital from './Pages/AdminHospitalManagement/AddHospital';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Login></Login>} />
          <Route path='/Register' element={<Register></Register>} />
          <Route path='/adminPage' element={<AdminMainPage></AdminMainPage>} />
          <Route path='/ADMINPage/DonorManagement' element={<AdminDonorManagement/>} />
          <Route path='/ADMINPage/HospitalManagement' element={<AdminHospitalManagement/>} />
              <Route path='/ADMINPage/HospitalManagement/AddHospital' element={<AddHospital></AddHospital>}></Route>
              <Route path='/ADMINPage/HospitalManagement/ViewHospitals' element={<ViewHospitals></ViewHospitals>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Router>
     
  );
}

export default App;
