import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, LogIn, SignUp } from './screens';

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
