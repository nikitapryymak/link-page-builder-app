import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RedirectToAdmin = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/admin"));
};
