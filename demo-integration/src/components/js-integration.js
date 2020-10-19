import React, { lazy, Suspense } from "react";

const Header = lazy(() => import("microFeApp1/header"));
const Section = lazy(() => import("microFeApp2/section"));

export function JsIntegration() {
    return (
        <Suspense
            fallback={
                <div>Loading... </div>
            }
        >
            <Header />
            <Section />
        </Suspense>
    );
}