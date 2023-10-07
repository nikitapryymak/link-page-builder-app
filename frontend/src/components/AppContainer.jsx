import { Outlet } from "react-router-dom";

const AppContainer = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-gray-200 min-h-screen">
      <Outlet />
    </div>
  );
};
export default AppContainer;
