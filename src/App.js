import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, LogIn, SignUp, Dashboard, LogInTest } from './screens';

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route index element={<LogInTest />} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
