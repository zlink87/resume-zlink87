import React from 'react';
import cssClasses from '../style/main.css';

const ProgressBar = (props) => {
        return(
            <div className={cssClasses.skill_bar}>
                <div className={cssClasses.skill_bar_bar} style={{'width':props.barWidth + '%', 'content': 'labas'}} aria-label='labas'>
                    <p className={cssClasses.skill_bar_text}>{props.barWidth}/{props.maxWidth}</p>
                </div>
            </div>
        );
}

export default ProgressBar;