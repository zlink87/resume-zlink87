import React from 'react';
import cssClasses from '../../style/main.css';

import ProfilePhoto from '../../assets/img/profilePhoto.jpg'

const BasicInfo = () => {
    return(
        <div className={[cssClasses.wrapper, cssClasses.row, cssClasses.about_me].join(' ')}>
            
            <div className={[cssClasses.column, cssClasses.about_me__profile].join(' ')}>
                <img src={ProfilePhoto} width="400" className={cssClasses.about_me__profile_picture} alt="Profile"/>
                <h3 className={cssClasses.about_me__profile_name}>Laurynas Žilinskas</h3>
                <p className={cssClasses.about_me__profile_age}><b>30 y. man</b></p>
                <p className={cssClasses.about_me__profile_from}>From Kaunas, Lithuania</p><br />   
            </div>
            <div className={[cssClasses.column].join(' ')}>
                <h3 className={cssClasses.header}>Short info about me</h3>
                <p className={cssClasses.p}>I am a graphic designer with almost 10 years of experience eventually transformed to front-end developer. 
                I have experience with software such as Adobe Photoshop, Illustrator, InDesign. CMS: Wordpress, Prestashop. 
                Languages: HTML, CSS (Bootstrap, SASS), JS (jQuery, ReactJS). Finished bachelor in Cultural management and master in Art management.</p>
                <p className={cssClasses.p}>All programming and design skills are self taught so this can be stated as self discipline and self motivation proof.</p>
                <p className={cssClasses.p}>I strongly believe that I could become a very strong asset of any IT business. My strongest qualities are self motivation, eye for detail, idea generation and hunger for innovation.</p><br/>
                <h3 className={cssClasses.header}>Personal Interests and Hobbies</h3>
                <p className={cssClasses.p}>Weekends are basicaly for family and friends. Love cooking mostly Italian and Lithuanian food. Playing with my old guitar. Love video games. Can talk hours about style, games and food. Also can sit and program for 8 hours without a drink just because there was typo mistake :D</p>
                
                
            </div>
        </div>
    );
}

export default BasicInfo;