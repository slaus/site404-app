import React from 'react';
import logo from "../img/logo.png";

const Logo = () => {

    return (
        <div className="col-lg-1 col-md-12 col-sm-3">
            <a className="logo-img" href="/">
                <img src={logo} alt="logo"/>
            </a>
        </div>
    );
};

export default Logo;
