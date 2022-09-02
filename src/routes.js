import { useRoutes } from "react-router-dom";
import Pages from "./pages";

export default function Router(){
    return useRoutes([
        { path : '/', element:<Pages.Main/>},
        { path : 'signup', element:<Pages.Signup/>},
        { path : 'signin', element:<Pages.Signin/>},
    ]);
}