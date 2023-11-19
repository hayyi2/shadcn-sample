import { createBrowserRouter } from "react-router-dom";

import Applayout from "./components/layouts/AppLayout";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";
import Topnav from "./pages/Topnav";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "layout/topnav",
                element: <Topnav />,
            },
            {
                path: "empty",
                element: <Empty />,
            },
        ],
    },
    {
        path: "*",
        element: <NoMatch />,
    },
])
