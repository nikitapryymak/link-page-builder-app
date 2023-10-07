import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";
import Navbar from "./navbar/Navbar";
import Spinner from "./loading/Spinner";

const AdminContainer = () => {
  const { user, isLoading, isSuccess } = useUser();

  if (isSuccess && !user) return <Navigate to="/login" replace />;
  return isLoading ? (
    <div className="center h-screen">
      <Spinner />
    </div>
  ) : isSuccess ? (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <div className="center h-screen text-red-500">
      An error occurred. Please refresh your browser.
    </div>
  );
};

export default AdminContainer;
