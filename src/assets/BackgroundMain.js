import React from 'react';
import cssClasses from '../style/main.css'

const Background = () => {
    return (
        <div className={cssClasses.background_wrapper}>
            <h1 className={cssClasses.iniciall}>L</h1>
            <h1 className={cssClasses.inicialz}>Z</h1>
        </div>
    );
}

export default Background;