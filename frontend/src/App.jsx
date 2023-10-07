import { Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppContainer from "./components/AppContainer";
import Appearance from "./views/appearance/Appearance";
import Analytics from "./views/analytics/Analytics";
import Settings from "./views/settings/Settings";
import Preview from "./components/preview/Preview";
import AdminContainer from "./components/AdminContainer";
import queryClient from "./config/queryClient";
import Links from "./views/links/Links";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<AppContainer />}>
          <Route path=":username" element={<>User Linktree</>} />
          <Route path="login" element={<>Login Page</>} />
        </Route>
        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminContainer />}>
          <Route element={<Preview />}>
            <Route index element={<Links />} />
            <Route path="appearance" element={<Appearance />} />
          </Route>
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
