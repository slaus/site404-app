import React from 'react';

import {TiDocument,TiImage,TiBook,TiContacts,TiHomeOutline,TiCogOutline} from 'react-icons/ti';

const TabButtons = () => {

    const menuItems = [
        {
            "link": "",
            "title": "Про мене"
        },
        {
            "link": "",
            "title": "Резюме"
        },
        {
            "link": "",
            "title": "Послуги"
        },
        {
            "link": "",
            "title": "Галерея"
        },
        {
            "link": "",
            "title": "Контакти"
        }
    ];

    return (
        <>
            <div className="col-lg-8 col-md-9 col-sm-8">
                <ul className="tab-buttons">
                    {
                        menuItems.map(({title,link}, index) => (
                            <li key={index}><a href={link} data-rel="item-two"><span>{title}</span></a></li>
                        ))
                    }
                    {/*<li className="selected"><a href="#" data-rel="item-one"><span>About</span></a></li>*/}
                    {/*<li><a href="#" data-rel="item-two"><span>Resume</span></a></li>*/}
                    {/*<li><a href="#" data-rel="item-three"><span>Service</span></a></li>*/}
                    {/*<li><a href="#" data-rel="item-four"><span>Portfolio</span></a></li>*/}
                    {/*<li><a href="#" data-rel="item-five"><span>Blog</span></a></li>*/}
                    {/*<li><a href="#" data-rel="item-six"><span>Contact</span></a></li>*/}
                </ul>
            </div>

            <ul className="tab-buttons tab-buttons-mobile">
                <li className="selected"><a href="#" data-rel="item-one"><TiHomeOutline size={24}/></a></li>
                <li><a href="#" data-rel="item-two"><TiDocument size={24}/></a></li>
                <li><a href="#" data-rel="item-three"><TiCogOutline size={24}/></a></li>
                <li><a href="#" data-rel="item-four"><TiImage size={24}/></a></li>
                <li><a href="#" data-rel="item-five"><TiBook size={24}/></a></li>
                <li><a href="#" data-rel="item-six"><TiContacts size={24}/></a></li>
            </ul>
        </>
    );
};

export default TabButtons;
