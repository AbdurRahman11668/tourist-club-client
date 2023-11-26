import { Navigate, useLocation } from "react-router-dom";
import useGuide from "../Hooks/UseGuide";
import useAuth from "../Hooks/useAuth";

const GuideRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isGuide, isGuideLoading] = useGuide();
    const location = useLocation();

    if (loading || isGuideLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isGuide) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};
export default GuideRoute;