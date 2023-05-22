import React from 'react';
import {TiWeatherNight, TiWeatherSunny} from "react-icons/ti";

const ColorStyle = () => {
    const [isDay, setIsDay] = React.useState(true);

    const selectColorStyle = (e) => {
        e.preventDefault();
        setIsDay(!isDay);
    }

    return (
        <>
                {
                    isDay ?
                        <a href="" onClick={selectColorStyle} className="ti-moon color_profile"><TiWeatherNight size={24}/></a>
                        :
                        <a href="" onClick={selectColorStyle} className="ti-sun color_profile"><TiWeatherSunny size={24}/></a>
                }
        </>
    );
};

export default ColorStyle;
