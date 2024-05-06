import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import ClassCards from './components/ClassCards';
import { getDb } from './services/db.mjs' ;
 

function App() {


  const db = getDb();
  return (
    <div className="App">
     

      <header className="App-header">    
        <Router> <img  src="logo.png" width="100" height="100" alt="logo" />

          <Routes>
            <Route path="/" element={<Layout/>}/>
         
            <Route path="/about" element={<About/>}/>
           
            <Route path="/class" element={<ClassCards database={db}/>}/>
              
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
