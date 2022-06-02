import React from 'react';
import FooterApp from './components/footer/FooterApp';
import HeaderApp from './components/header/HeaderApp';
import RoutesApp from './routes/RoutesApp';


const App = () => {
    return (
        <>
            <HeaderApp />
            <RoutesApp/>
            <FooterApp />
        </>
    );
};

export default App;