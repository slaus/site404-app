import React from 'react';
import {TiSocialFacebook,TiSocialTwitter,TiSocialGithub,TiSocialLinkedin} from 'react-icons/ti';

const SocialIcons = () => {

    const [socialIcons, setSocialIcons] = React.useState({});

    React.useEffect(() => {
        return () => {
            setSocialIcons({});
        };
    }, []);

    return (
        <div className="col-sm-12 col-lg-3">
            <div className="social_profile">
                <ul>
                    <li><a href="#"><TiSocialFacebook size={24}/></a></li>
                    <li><a href="#"><TiSocialTwitter size={24}/></a></li>
                    <li><a href="#"><TiSocialLinkedin size={24}/></a></li>
                    <li><a href="#"><TiSocialGithub size={24}/></a></li>
                </ul>
            </div>
        </div>
    );
};

export default SocialIcons;
