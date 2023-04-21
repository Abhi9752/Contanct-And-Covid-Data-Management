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
          <Route path="https://abhi9752.github.io/Contanct-And-Covid-Data-Management" element={<Contact/>}></Route>
          <Route path="https://abhi9752.github.io/Contanct-And-Covid-Data-Management/create" element={<Createcontact/>}></Route>
          <Route path="https://abhi9752.github.io/Contanct-And-Covid-Data-Management/edit" element={<Editcontact/>}></Route>
          <Route path="https://abhi9752.github.io/Contanct-And-Covid-Data-Management/maps" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
