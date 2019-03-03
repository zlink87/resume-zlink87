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
                        return xp.isUpper === true ? <SingleExp role={xp.role} company={xp.company} description={xp.description} date={xp.time} isUp={xp.isUpper} key={xp.key}/> : null
                    })}
                </div> 
                <div className={[cssClasses.timeline_row].join(' ')}>
                    {props.exp.map(xp => {
                        return xp.isUpper === false ? <SingleExp role={xp.role} company={xp.company} description={xp.description} date={xp.time} isUp={xp.isUpper} key={xp.key}/> : null
                    })}
                </div> 
                    {/* <div className={[cssClasses.timeline_row, cssClasses.wrapper_2].join(' ')}>
                        <div className={[cssClasses.timeline_column_1, cssClasses.xp].join(' ')}>
                            <h3 className={cssClasses.xp__header}>Owner</h3>
                            <small className={cssClasses.xp__small}>TrainedPixels | Creative Agency</small>
                            <p className={cssClasses.xp__p}>Website and e-commerce sites creation using Wordpress, Prestashop, Woocommerce CMS. Graphic design services (logos, press, banners), communication with customers. Languages: HTML, CSS (Bootstrap), JS (jQuery, ReactJS).</p>
                            <span className={cssClasses.xp__timeline_date}>March 2017 - Present</span>
                            <div className={cssClasses.xp__timeline_bubble} />    
                        </div>
                    </div>
                    <div className={[cssClasses.timeline_row, cssClasses.wrapper_2].join(' ')}>
                    <div className={[cssClasses.timeline_column_1, ].join(' ')}>
                        <h3 className={cssClasses.xp__header}>Senior Graphic Designer</h3>
                        <small className={cssClasses.xp__small}>UAB "Macmanus" | Apple Developer</small>
                        <p className={cssClasses.xp__p}>Working for Apple Developer who is oriented in template development for Apple products I learned work fast without loosing quality. A lot of attention was focused to pixel-perfect work and other small details as user experience pieces.</p>  
                        <div className={cssClasses.xp__timeline_bubble}/>
                        <span className={cssClasses.xp__timeline_date}>December 2013 - March 2016</span>    
                    </div>
                    </div>
                    <div className={[cssClasses.timeline_row, cssClasses.wrapper_2].join(' ')}>
                        <div className={[cssClasses.timeline_column_1, ].join(' ')}>
                            <h3 className={cssClasses.xp__header}>Instructor</h3>
                            <small className={cssClasses.xp__small}>ITMC | IT Training Center</small>
                            <p className={cssClasses.xp__p}>Working with 8-20 people groups from teenagers to seniors. Teaching Photoshop techniques, basic understandig of the web, web design and internet marketing.</p> 
                            <div className={cssClasses.xp__timeline_bubble}/>  
                            <span className={cssClasses.xp__timeline_date}>Occasionally</span>   
                        </div>
                    </div> */}
                </div>

                {/* BOTTOM ROW */}
                {/* <div className={[cssClasses.timeline_row].join(' ')}>
                    <div className={[cssClasses.timeline_row, cssClasses.wrapper_3].join(' ')}>
                        <div className={[cssClasses.timeline_column_2, ].join(' ')}>
                            <h3 className={cssClasses.xp__header}>Graphic Designer</h3>
                            <small className={cssClasses.xp__small}>Vilnius University | Kaunas Faculty</small>
                            <p className={cssClasses.xp__p}>Working with students, graphic design, internet marketing - responsible for image building of Kaunas Faculty of Humanities. A lot of multi-tasking assignments, learned a lot about collaborating, working in team, event management, graphic design and e-marketing.</p>
                            <div className={cssClasses.xp__timeline_bubble_2}/>
                            <span className={cssClasses.xp__timeline_date_2}>November 2011 - December 2013</span>   
                        </div>
                    </div>
                    <div className={[cssClasses.timeline_row, cssClasses.wrapper_3].join(' ')}>
                        <div className={[cssClasses.timeline_column_2, ].join(' ')}>
                            <h3 className={cssClasses.xp__header}>Sales and Marketing Manager</h3>
                            <small className={cssClasses.xp__small}>UAB "Amziaus Pasaka" | Entertainment, Event Center </small>
                            <p className={cssClasses.xp__p}>Banquet hall “Nautilus” and Night Club “BlackPearl” advertisement design, new customer search, liaison with existing customers, theater troups and bands search, events management.</p> 
                            <div className={cssClasses.xp__timeline_bubble_2}/>  
                            <span className={cssClasses.xp__timeline_date_2}>June 2010 - August 2011</span>   
                        </div>
                    </div>
                </div>         */}
             
        </div>
    );
}

export default Experience;