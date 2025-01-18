import NavigationBar from "./NavigationBar.tsx";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export function RootLayout() {
    const location = useLocation();

    useEffect(() => {
        const element = document.querySelector("body > div");

        if (element && element instanceof HTMLElement) {
            if (location.pathname === "/" || location.pathname === "/register") {
                element.style.width = "75%";
                element.style.height = "80%";
            } else {
                element.style.width = "100%";
                element.style.height = "100%";
            }
        }
    }, [location]);

    return (
        <>
            <div className="d-flex h-100">
                <NavigationBar />
                <Outlet />
            </div>
        </>
    );
}

export default RootLayout;
