import React, { useEffect, useState } from 'react'
import LoginPage from './components/loginPage'
import ForgotPassword from './components/ForgotPassword';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

const App = () => {
  const [startColor, setStartColor] = useState('bg-gradient-to-b from-red-400 via-yellow-400 to-green-400');
  const [endColor, setEndColor] = useState('bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-400');

  
  const updateGradientColors = () => {

    const gradientClasses1 = 'bg-gradient-to-b from-red-400 via-yellow-400 to-green-400';
    const gradientClasses2 = 'bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-400';

    setStartColor(gradientClasses1);
    setEndColor(gradientClasses2);
  };

  useEffect(() => {
    const interval = setInterval(updateGradientColors, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    // <div className={`bg-gradient-to-r from-orange-100`}>
    //   <LoginPage/>
    //   {/* <ForgotPassword /> */}
    // </div>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<LoginPage />} />
      <Route path='/forgot' element={<ForgotPassword /> } />

    </Routes>
    </BrowserRouter>
  )
}

export default App