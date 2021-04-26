import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function AppLayout({children}) {

    return (
        <div>
            <Navbar transparent={true} />
            <div className="view-wrapper">
                {children}
            </div>
            <Footer />
        </div>
    )
}

AppLayout.prototype = {
    children: PropTypes.element
};

export default AppLayout;
