import React from 'react';
import {Container, Row} from "./index";

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="copyright">
                            <p>Copyright &copy; 2006-{getCurrentYear()} | All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
