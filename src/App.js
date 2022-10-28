import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/pages/Main';
import Script from './components/pages/Script';
import Script2 from './components/pages/Script2';
import Script3 from './components/pages/Script3';
import Script4 from './components/pages/Script4';
import Script5 from './components/pages/Script5';
import ReactPage from './components/pages/ReactPage';
import ReactPage2 from './components/pages/ReactPage2';
import ReactPage3 from './components/pages/ReactPage3';
import ReactPage4 from './components/pages/ReactPage4';
import JavaScript from './components/pages/JavaScript';
import Three from './components/pages/Three';
import Three2 from './components/pages/Three2';
import Vue from './components/pages/Vue';
import Site from './components/pages/Site';
import Responsive from './components/pages/Responsive';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route Main path="/" element={<Main />} />
        <Route Script path="/script" element={<Script />} />
        <Route Script path="/script2" element={<Script2 />} />
        <Route Script path="/script3" element={<Script3 />} />
        <Route Script path="/script4" element={<Script4 />} />
        <Route Script path="/script5" element={<Script5 />} />
        <Route ReactPage path="/react" element={<ReactPage />} />
        <Route ReactPage2 path="/react2" element={<ReactPage2 />} />
        <Route ReactPage3 path="/react3" element={<ReactPage3 />} />
        <Route ReactPage4 path="/react4" element={<ReactPage4 />} />
        <Route JavaScript path="/js" element={<JavaScript />} />
        <Route Three path="/three" element={<Three />} />
        <Route Three path="/three2" element={<Three2 />} />
        <Route Vue path="/vue" element={<Vue />} />
        <Route Site path="/site" element={<Site />} />
        <Route Responsive path="/responsive" element={<Responsive />} />
      </Routes>
    </BrowserRouter>      
  );
}

export default App;
