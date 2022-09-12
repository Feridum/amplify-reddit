import {useLocation, Navigate, Route, Outlet} from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import {IndexRouteProps, LayoutRouteProps, PathRouteProps} from "react-router/lib/components";
import {ReactElement, ReactNode} from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}
export const ProtectedRoute = (): ReactElement =>{
    const location = useLocation();
    const { route } = useAuthenticator((context) => [context.route]);

    console.log({route});
    if (route !== 'authenticated') {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet/>;
}