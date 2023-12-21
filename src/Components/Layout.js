import React from 'react';
import Navbar from './Navbar';
import Footer1 from './Footer1';
import Body from './Body';
function Layout(props) {
    return (
        <div>
            <Navbar></Navbar>
            <Body></Body>
            <Footer1></Footer1>
        </div>
    );
}
export default Layout;