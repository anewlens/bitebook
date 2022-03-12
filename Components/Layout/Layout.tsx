import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;