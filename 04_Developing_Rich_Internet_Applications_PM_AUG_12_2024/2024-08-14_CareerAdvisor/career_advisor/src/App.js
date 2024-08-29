import React from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import List from './components/List';
import Video from './components/Video';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* Other components and content */}
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/main" element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/video" element={<Video />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;