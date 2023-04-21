import React from 'react';
import './App.css';
import Contact from './Components/Contact';
import Createcontact from './Components/Createcontact';
import Editcontact from './Components/Editcontact';
import Dashboard from './Components/Chartsandmaps';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Contact/>}></Route>
          <Route path="/create" element={<Createcontact/>}></Route>
          <Route path="/edit" element={<Editcontact/>}></Route>
          <Route path="/maps" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
