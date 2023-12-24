import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "games/:id",
                element: <GameDetailPage />,
            },
        ],
    },
]);

export default router;
