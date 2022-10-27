import Footer from "./footer";
import Header from "./header";
import React from "react";

type LayoutProps = {
    children: React.ReactNode; // 👈️ type children
};

const Layout = (props:LayoutProps) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Header/>
            <main className="mb-auto">
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
