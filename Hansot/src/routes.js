import { useRoutes } from "react-router-dom";
import Pages from "./pages";

export default function Router(){
    return useRoutes([
        { path : '/', element:<Pages.Main/>},
        { path : 'signup', element:<Pages.Signup/>},
        { path : 'signin', element:<Pages.Signin/>},
        { path : 'menu', element:<Pages.Menu/>},
        { path : 'store_find', element:<Pages.StoreFind/>},
        { path : 'brandstory', element:<Pages.Brandstory/>},
        { path : 'esg', element:<Pages.Esg/>},
        { path : 'event', element:<Pages.Event/>},
        { path : 'promise', element:<Pages.Promise/>},
        { path : 'whystore', element:<Pages.WhyStore/>},
    ]);
}