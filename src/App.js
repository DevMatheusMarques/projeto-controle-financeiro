import React, {useState, useEffect} from 'react';
import Global from './style/global'
import Header from './components/Header';
import Resume from './components/Resume';
import Form from "./components/Form";

const App = () => {
    return(
        <>
            <Header/>
            <Resume/>
            <Form/>
            <Global/>
        </>
    );
}

export default App;