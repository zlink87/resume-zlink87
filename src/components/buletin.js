import React from 'react';
import cssClasses from '../style/main.css';

const Buletin = (props) => {
    return(
        <div className={cssClasses.portfolio__navigation__buletin}> 
            {props.id === props.preId ? <div className={cssClasses.portfolio__navigation__buletin_overlay} id={props.id}/> : null}
        </div>
    );
}

export default Buletin;