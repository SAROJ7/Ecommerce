import { Navigate } from "react-router-dom";

export const OpenRoute = ({ children }) => {
  const getTokenFromLocalStorage = localStorage?.getItem("loggedcustomer");
  const parsed = JSON.parse(getTokenFromLocalStorage);
  console.log(parsed?.token);
  return !getTokenFromLocalStorage ? (
    children
  ) : (
    <Navigate to="/" replace={true} />
  );
};
