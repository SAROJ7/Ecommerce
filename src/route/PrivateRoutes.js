import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(
    localStorage?.getItem("loggedcustomer")
  );

  console.log(getTokenFromLocalStorage?.token);
  return getTokenFromLocalStorage ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
