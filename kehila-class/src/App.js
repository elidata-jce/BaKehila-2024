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
      <img  src="https://stock.adobe.com/il/images/computer-learning-logo-designs-online-learning-logo-template-designs-vector-illustration/168461703"  alt="logo" />
      <header className="App-header">
        <Router>
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
