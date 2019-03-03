import React from 'react';
import cssClasses from '../style/main.css';


const Photo = (props) => {
    return(
        <div className={[cssClasses.photo_wrapper].join(' ')} >                
            <img className={[cssClasses.portfolio__photo_single].join(' ')} src={props.url} alt={props.alt} id={props.id} height="600" />   
        </div>
    );
   
}
export default Photo;