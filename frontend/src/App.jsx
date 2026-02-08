import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

const App = () => {
  const isAuthenicated = false
  const loading = false

  if(loading) {
    return 
    (
      <div className=''>
        <p > Loading...
        </p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route 
        path="/"
        element={isAuthenicated ? <Navigate to ="/dashboard" replace /> : <Navigate to= "/login" replace />}
        />
        <Route path="/login" element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage/>}/>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )


}



export default App