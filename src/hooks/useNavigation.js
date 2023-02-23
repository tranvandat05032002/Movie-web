import { useLocation, useNavigate } from "react-router-dom";

export function useNavigation() {
  let location = useLocation();
  const navigate = useNavigate();
  const getURL = (id) => {
    if (location.pathname === "movie") location.pathname = "";
    navigate(`${location.pathname}/${id}`);
  };
  return {
    getURL,
  };
}
