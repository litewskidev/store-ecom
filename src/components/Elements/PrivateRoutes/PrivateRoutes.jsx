import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = false;

  return(
    user ? <Outlet /> : <Navigate to='/login' replace />
  );
};

export default PrivateRoutes;
