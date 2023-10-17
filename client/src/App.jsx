import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddCards from './components/AddCards';
import Subjects from './components/Subjects';
import Topics from './components/Topics';
import TopicDetail from './components/TopicDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Kards" element={<AddCards />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/:subjectId" element={<Topics />} />
        <Route path="/subjects/:subjectId/:topicId" element={<TopicDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
