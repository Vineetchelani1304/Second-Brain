import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactElement; // Component to render if authenticated
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem("token"); // Check for authentication token

    if (!token) {
        return <Navigate to="/signin" replace />; // Redirect to signin if not authenticated
    }

    return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
