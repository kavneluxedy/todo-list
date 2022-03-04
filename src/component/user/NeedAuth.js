import { useLocation, Navigate } from "react-router-dom";

const NeedAuth = ({ logged, children }) => {
  let location = useLocation();
  console.log(logged);

  if (logged) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default NeedAuth;
