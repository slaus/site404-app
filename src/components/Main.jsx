import React from 'react';
import {Avatar, ColorStyle, Logo, SocialIcons, TabButtons} from "./index";

const Main = () => {

    return (
        <div id="main-container-panel" className="main-container-panel">
            <div className="container">
                <div className="row">
                    <Logo/>
                    <TabButtons/>
                    <SocialIcons/>
                    <ColorStyle/>
                </div>

            </div>
        </div>
    );
};

export default Main;
