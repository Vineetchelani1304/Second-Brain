import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import ShareComponent from "./pages/ShareComponent";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const sharedLink = localStorage.getItem("link");
  console.log(sharedLink);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/share/:link" element={<ShareComponent />} /> {/* Always register this route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;


