import React from "react";
import AuthRoutes from "./auth.routes";

export default function Routes() {
    const isAuthenticated = false;

    return (
       isAuthenticated ? <AuthRoutes /> : <AuthRoutes />
    );
}
