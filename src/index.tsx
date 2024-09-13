import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import {RecoilRoot} from "recoil";
import AppIndex from "@/app/page";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@/app/theme";
import {StrictMode} from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<AppIndex/>),
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
]);

const rootElement = document.getElementById("root")
if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <RecoilRoot>
            <StrictMode>
                <RouterProvider router={router}/>
            </StrictMode>
        </RecoilRoot>
    </ThemeProvider>
);
