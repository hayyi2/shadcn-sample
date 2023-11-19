import { createBrowserRouter } from "react-router-dom";

import { Applayout } from "./components/layouts/AppLayout";
import { SideLayout } from "./components/layouts/SideLayout";

import NoMatch from "./pages/NoMatch";
import Dashboard from "./pages/Dashboard";
import Empty from "./pages/Empty";
import Topnav from "./pages/Topnav";
import Sidenav from "./pages/Sidenav";
import Forms from "./pages/Forms";
import Tables from "./pages/Tables";

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
                path: "forms",
                element: <Forms />,
            },
            {
                path: "table",
                element: <Tables />,
            },
            {
                path: "empty",
                element: <Empty />,
            },
        ],
    },
    {
        path: "/layout/sidenav",
        element: <SideLayout />,
        children: [
            {
                path: "",
                element: <Sidenav />,
            },
        ],
    },
    {
        path: "*",
        element: <NoMatch />,
    },
])
