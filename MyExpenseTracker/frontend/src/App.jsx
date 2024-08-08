import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

const App = () => {
  return (
    <Router>
      <div className='bg-custom-gradient min-h-[80vh] min-w-[80vw] flex items-center justify-center my-4 p-4 rounded-2xl shadow-[5px_5px_0px_5px_#0C7489] border border-[#0C7489]'>
          <Routes>
            <Route path="/" exact element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/settings" element={<Settings />}/>
          </Routes>
      </div>
    </Router>
  );
};

export default App;
