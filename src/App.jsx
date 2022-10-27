import { Fragment } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DashboardPage from './pages/DashboardPage';
import CreatePage from './pages/CreatePage';
import NewPage from './pages/NewPage';
import ProgressPage from './pages/ProgressPage';
import CompletedPage from './pages/CompletedPage';
import CanceledPage from './pages/CanceledPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import NotfoundPage from './pages/NotfoundPage';
import FullscreenLoader from './components/MasterLayout/FullscreenLoader';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashboardPage/>} />
          <Route exact path="/Create" element={<CreatePage/>} />
          <Route exact path="/All" element={<NewPage/>} />
          <Route exact path="/Progress" element={<ProgressPage/>} />
          <Route exact path="/Completed" element={<CompletedPage/>} />
          <Route exact path="/Canceled" element={<CanceledPage/>} />
          <Route exact path="/Profile" element={<ProfilePage/>} />
          <Route exact path="/Login" element={<LoginPage/>} />
          <Route exact path="/Registration" element={<RegistrationPage/>} />
          <Route exact path="/ForgetPassword" element={<ForgetPasswordPage/>} />
          <Route exact path="*" element={<NotfoundPage/>} />
          
        </Routes>
      </BrowserRouter>
      <FullscreenLoader/>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
