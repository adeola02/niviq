import {Navigate} from "react-router-dom";

const AdminRoute = ({element, children}) => {
    const isAdmin = true;
    const isLoggedIn = "";


    return isAdmin ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/" replace />
    );
};

export default AdminRoute;
