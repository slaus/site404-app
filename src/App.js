import React from 'react';
import './App.css';
import {Footer, Main, Preloader, Wrapper} from "./components";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [isLoading, setIsLoading] = React.useState(false);
    return (
        <>
            {isLoading ?
                <Preloader/>
                :
                <div className="wrapper">
                    <Main/>
                    <Footer/>
                </div>
            }
        </>
    );
}

export default App;
