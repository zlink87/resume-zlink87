import React from 'react';
import cssClasses from '../../style/main.css';

import ProfilePhoto from '../../assets/img/profilePhoto.jpg'

const BasicInfo = () => {
    return(
        <div className={[cssClasses.wrapper, cssClasses.row, cssClasses.about_me].join(' ')}>
            
            <div className={[cssClasses.column, cssClasses.about_me__profile].join(' ')}>
                <img src={ProfilePhoto} width="400" className={cssClasses.about_me__profile_picture} alt="Profile"/>
                <h3 className={cssClasses.about_me__profile_name}>Laurynas Žilinskas</h3>
                <p className={cssClasses.about_me__profile_age}><b>31 y. man</b></p>
                <p className={cssClasses.about_me__profile_from}>From Kaunas, Lithuania</p><br />   
            </div>
            <div className={[cssClasses.column].join(' ')}>
                <h3 className={cssClasses.header}>Short info about me</h3>
                <p className={cssClasses.p}>I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with Angular, Vue and React.</p>
                <h3 className={cssClasses.header}>Personal Interests and Hobbies</h3>
                <p className={cssClasses.p}>Weekends are basicaly for family and friends. Love cooking mostly Italian and Lithuanian food. Playing with my old guitar. Love video games. Can talk hours about style, games and food. Also can sit and program for 8 hours without a drink just because there was typo mistake :D</p>
                
                
            </div>
        </div>
    );
}

export default BasicInfo;