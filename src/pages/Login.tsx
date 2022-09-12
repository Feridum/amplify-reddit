import {useLocation, useNavigate} from "react-router-dom";
import {Authenticator, useAuthenticator, View} from "@aws-amplify/ui-react";
import {useEffect} from "react";


export const Login = ()=>{
    const { route } = useAuthenticator((context) => [context.route]);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const from = (location.state as Record<string, Record<string, string>>)?.from?.pathname || '/';

    useEffect(() => {
        if (route === 'authenticated') {
            navigate(from, { replace: true });
        }
    }, [route, navigate, from]);

    return (
        <View className="auth-wrapper">
            <Authenticator/>
        </View>
    );
}