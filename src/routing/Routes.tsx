import {BrowserRouter, Route, Routes as RRoutes} from "react-router-dom";
import {Layout} from "../components/Layout";
import {Home} from "../pages/Home";
import {ProtectedRoute} from "./ProtectedRoute";
import {AddPost} from "../pages/AddPost";
import {Login} from "../pages/Login";
import { MyPosts } from "../pages/MyPosts";


export const Routes = () => {

    return (
        <BrowserRouter>
        <RRoutes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="add-post" element={<AddPost/>} />
                    <Route path="my-posts" element={<MyPosts/>} />
                </Route>
            </Route>
        </RRoutes>
    </BrowserRouter>
    )
}