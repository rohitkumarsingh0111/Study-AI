import React from 'react'
import AppLayout from '../layout/AppLayout';

const ProtectedRoute = () => {

    const isAuthenicated = true
    const loading = false;

    if(loading) {
        return <div> Loading...</div>;
    }

  return isAuthenicated ? (
    <AppLayout>
    <Outlet/>
    </AppLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute