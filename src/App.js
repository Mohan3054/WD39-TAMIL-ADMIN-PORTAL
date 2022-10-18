import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/sb-admin-2.css';
import '../src/fontawesome-free/css/all.min.css';
import Topbar from './Topbar';
import User from './User';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usercreate from './Usercreate';
import ViewUser from './ViewUser';
import Edituser from './Edituser';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content"><Topbar></Topbar>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/Users" element={<User />}></Route>
              <Route path="/User_create" element={<Usercreate />}></Route>
              <Route path="/User/:id" element={<ViewUser />}></Route>
              <Route path="/edit/:id" element={<Edituser />}></Route>
            </Routes>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;



