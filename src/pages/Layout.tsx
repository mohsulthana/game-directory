import { Box } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Outlet />
                <Analytics />
            </Box>
        </>
    );
};

export default Layout;
