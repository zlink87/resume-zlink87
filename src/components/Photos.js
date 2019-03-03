import React from 'react';
import cssClasses from '../style/main.css';
import { Link } from 'react-router-dom';

const Photos = (props) => {
    return(
        <div className={cssClasses.portfolio__photos_grid} >
            <Link to={{ pathname: "/single-portfolio-item", hash:props.tag}} onClick={props.clicked.bind(null,props.id)}> 
                <img className={cssClasses.portfolio__photo} src={props.url} alt={props.alt} id={props.id} height="220"/>
            </Link>         
        </div>
    );
}

export default Photos;