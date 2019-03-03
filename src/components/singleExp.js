import React from 'react';
import cssClasses from '../style/main.css';

const singleExp = (props) => {
    return(
        <div className={[cssClasses.timeline_row, props.isUp === true ? cssClasses.wrapper_2 : cssClasses.wrapper_3].join(' ')}>
            <div className={[props.isUp === true ? cssClasses.timeline_column_1 : cssClasses.timeline_column_2, cssClasses.xp].join(' ')}>
                <h3 className={cssClasses.xp__header}>{props.role}</h3>
                <small className={cssClasses.xp__small}>{props.company}</small>
                <p className={cssClasses.xp__p}>{props.description}</p>
                <span className={props.isUp === true ? cssClasses.xp__timeline_date : cssClasses.xp__timeline_date_2}>{props.date}</span>
                <div className={props.isUp === true ? cssClasses.xp__timeline_bubble : cssClasses.xp__timeline_bubble_2} />    
            </div>
        </div>
    );
}

export default singleExp;