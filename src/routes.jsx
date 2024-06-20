import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Errorpage from "./components/Layout/Errorpage";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Errorpage />
    },
    {
        path: "/explore",
        element: <>Explore</>,
    },
])

export default route