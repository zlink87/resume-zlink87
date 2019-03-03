import React from 'react';
import cssClasses from '../../style/main.css';
import Photos from '../../components/Photos';



const Portfolio = (props) => {

        return(
            <div className={[cssClasses.wrapper, cssClasses.portfolio].join(' ')}>
                { props.thumb.map(thumb => {
                    return <Photos 
                            id={thumb.uqid} 
                            key={thumb.id}
                            clicked={props.clicked}
                            url={thumb.url}
                            alt={thumb.name}
                            tag={thumb.tag}
                            />
                })} 
            </div>
        );
    
}

export default Portfolio;