import React from 'react';
import cssClasses from '../style/main.css';

const singleExp = (props) => {
    return(
        <div className={[cssClasses.timeline_row, props.xp.isUpper === true ? cssClasses.wrapper_2 : cssClasses.wrapper_3].join(' ')}>
            <div className={[props.xp.isUpper === true ? cssClasses.timeline_column_1 : cssClasses.timeline_column_2, cssClasses.xp].join(' ')}>
                <h3 className={cssClasses.xp__header}>{props.xp.role}</h3>
                <small className={cssClasses.xp__small}>{props.xp.company}</small>
                <p className={cssClasses.xp__p}>{props.xp.description}</p>
                <p className={cssClasses.xp__p}>{props.xp.technologies}</p>
                <p className={cssClasses.xp__p}>{props.xp.software}</p>
                <span className={props.xp.isUpper === true ? cssClasses.xp__timeline_date : cssClasses.xp__timeline_date_2}>{props.xp.time}</span>
                <div className={props.xp.isUpper === true ? cssClasses.xp__timeline_bubble : cssClasses.xp__timeline_bubble_2} />    
            </div>
        </div>
    );
}

export default singleExp;