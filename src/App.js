import Navbar from './components/Navbar'; // <== IMPORT
import HomePage from './components/HomePage'; // <== IMPORT
import AboutPage from './components/AboutPage'; // <== IMPORT
import ProjectsPage from './components/ProjectsPage'; // <== IMPORT
import ErrorPage from './components/ErrorPage'; // <== IMPORT

import { Routes, Route } from 'react-router-dom'; // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {<Route path="/" element={<HomePage />} />}

        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
