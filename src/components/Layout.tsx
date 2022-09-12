import {Outlet} from "react-router-dom";
import {Menu, MenuAuthenticated} from "../ui-components";
import {useAuthenticator} from "@aws-amplify/ui-react";


export const Layout = ()=>{
    const { route } = useAuthenticator((context) => [context.route]);

    const isAuthenticated = route === 'authenticated'

    console.log({isAuthenticated})
    return (
        <div>
            {isAuthenticated ? <MenuAuthenticated/> :<Menu/>}
            <Outlet/>
        </div>
    )
}