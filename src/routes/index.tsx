import React from "react";
import AuthRoutes from "./auth.routes";

export default function Routes() {
    const isAuthenticated = true;

    return (
       isAuthenticated ? <AuthRoutes /> : null
    );
}
