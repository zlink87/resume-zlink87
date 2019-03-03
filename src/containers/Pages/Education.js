import React from 'react';
import cssClasses from '../../style/main.css';

const Education = () => {
    return(
        <div className={[cssClasses.wrapper, cssClasses.row].join(' ')}>
            <div className={[cssClasses.column, cssClasses.color_section].join(' ')}>
                <h2 className={cssClasses.header}>Formal Education</h2> 
                    <div className={cssClasses.edu_card}>
                        <small className={cssClasses.small_edu}>Bachelor</small>
                        <h3 className={cssClasses.name_edu}>Culture Management</h3>
                        <h4 className={cssClasses.sub_header_edu}>Vilnius University Kaunas Faculty of Humanities</h4>
                    </div>

                    <div className={cssClasses.edu_card}>
                        <small className={cssClasses.small_edu}>Master</small>
                        <h3 className={cssClasses.name_edu}>Art Management</h3>
                        <h4 className={cssClasses.sub_header_edu}>Vilnius University Kaunas Faculty of Humanities</h4>
                    </div> 
                </div>
                <br />
                <div className={cssClasses.column}>
                    <h2 className={cssClasses.header}>Informal Education</h2>
                    <h4 className={cssClasses.sub_header_edu}>Online Training</h4>
                    <p className={cssClasses.p}>Team Tree House</p>
                    <p className={cssClasses.p}>Udacity</p>
                    <p className={cssClasses.p}>Udemy</p>
                    <p className={cssClasses.p}>Free Code Camp</p>
                </div>

                <div className={cssClasses.column}>
                <hr />
                <h4 className={cssClasses.sub_header_edu}>Books</h4>
                    <p className={cssClasses.p}><strong>Know Your Onions</strong> by Drew de Soto</p>
                    <p className={cssClasses.p}><strong>The Graphic Design Exercise Book</strong> by Jessica Glaser</p>
                    <p className={cssClasses.p}><strong>F**k It</strong> by John C. Parkin</p>
                    <hr />
                    <h4 className={cssClasses.sub_header_edu}>Practice</h4>
                    <h4 className={cssClasses.sub_header}>ITMC</h4>
                    <p className={cssClasses.p}>IT Training Center in Kaunas</p>
                    <h4 className={cssClasses.sub_header}>TrainedPixels</h4>
                    <p className={cssClasses.p}>Self founded web development home studio</p>
                </div>
    </div>
    );
}

export default Education;