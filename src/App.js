import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

//After Router Added Components -> For Now Mount Each Component And Make Work
import WebSiteHome from './Pages/WebSiteHome';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';

//Admin Pages
import AdminMainPage from './Pages/AdminMainPage';
import AdminDonorManagement from './Pages/AdminDonorManagement/AdminDonorManagement';
import AdminHospitalManagement from './Pages/AdminHospitalManagement/AdminHospitalManagement';
import ViewHospitals from './Pages/AdminHospitalManagement/ViewHospitals';
import AddHospital from './Pages/AdminHospitalManagement/AddHospital';

//Donor pages
import DonorMainPage from './Pages/DonorMainPage';
import ProfilePage from './Pages/DonorPages/ProfilePage';
//Hopital Pages
import HospitalMainPage from './Pages/HospitalMainPage';



function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<WebSiteHome></WebSiteHome>}></Route>
          <Route path='/login' element={<Login></Login>} />
          <Route path='/Register' element={<Register></Register>} />
          <Route path='/adminPage' element={<AdminMainPage></AdminMainPage>} />
          <Route path='/ADMINPage/DonorManagement' element={<AdminDonorManagement/>} />
          <Route path='/ADMINPage/HospitalManagement' element={<AdminHospitalManagement/>} />
              <Route path='/ADMINPage/HospitalManagement/AddHospital' element={<AddHospital></AddHospital>}></Route>
              <Route path='/ADMINPage/HospitalManagement/ViewHospitals' element={<ViewHospitals></ViewHospitals>}></Route>

          <Route path='/DonorMainPage' element={<DonorMainPage></DonorMainPage>}></Route>
              <Route path='/DonorMainPage/Profile' element={<ProfilePage></ProfilePage>}></Route>           
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Router>
     
  );
}

export default App;
