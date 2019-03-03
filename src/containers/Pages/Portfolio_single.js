import React from 'react';
import cssClasses from '../../style/main.css';
import { Link } from 'react-router-dom';

import Photo from '../../components/Photo';
import Buletin from '../../components/buletin';

const SingleImage = (props) => {
    
        return (
            <div className={[cssClasses.wrapper, cssClasses.portfolio].join(' ')}>
              
              <div className={cssClasses.portfolio__single_wrapper}>
                <Link className={cssClasses.portfolio__back_button} to="/portfolio" />

                {props.photos.map(photo => {
                    if(props.getId === photo.uqid) {
                        return (<Photo 
                            key={photo.id}
                            url={photo.url}
                            alt={photo.name}
                            id={photo.uqid}
                        />);
                        
                    } 
                   return null;
                })}

                <div className={cssClasses.portfolio__navigation}>
                    <Link className={cssClasses.portfolio__navigation__prev} to={{pathname: "/single-portfolio-item", hash: props.newHash }} onClick={props.change.bind(null,props.getId, false)} />
                    {/* <p className={cssClasses.portfolio__navigation__display}>{props.getId} / {props.photos.length}</p> */}

                    <div className={cssClasses.portfolio__navigation__buletin_wrapper}>
                        {props.photos.map(photo => {
                            return <Buletin 
                                        id={photo.uqid}
                                        preId={props.getId}
                                    />
                        })}
                    </div>

                    <Link className={cssClasses.portfolio__navigation__next} to={{pathname: "/single-portfolio-item", hash: props.newHash }} onClick={props.change.bind(null,props.getId, true)} />
                    </div>
                </div>

            </div>
        );
        
    }

export default SingleImage;