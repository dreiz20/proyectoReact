import {BrowserRouter,
  Route,
  Routes} from 'react-router-dom';
import People from "./pages/People";
import Films from "./pages/Films";
import Navbar from "./components/Navbar";
import React from 'react';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <div className="margen">
          <Routes>
                <Route path="/people" element={ <People /> } />
                <Route path="/films" element={ <Films /> } />
          </Routes>
          </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
