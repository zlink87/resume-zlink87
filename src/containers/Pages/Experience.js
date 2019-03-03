import React from 'react';
import cssClasses from '../../style/main.css';
import SingleExp from '../../components/singleExp';

const Experience = (props) => {
    return(
        <div>
            {/* TIMELINE LINE */}   
            <div className={cssClasses.timeline_line}/>
            <div className={cssClasses.wrapper}>
                {/* TOP ROW */}
                <div className={[cssClasses.timeline_row].join(' ')}>
                    {props.exp.map(xp => {
                        return xp.isUpper === true ? <SingleExp xp={xp}/> : null
                    })}
                </div> 
                <div className={[cssClasses.timeline_row].join(' ')}>
                    {props.exp.map(xp => {
                        return xp.isUpper === false ? <SingleExp xp={xp}/> : null
                    })}
                </div>
            </div>
        </div>
    );
}

export default Experience;