import React from 'react';
import cssClasses from '../style/main.css'

import { NavLink } from 'react-router-dom';

//ICONS
import InfoIcon from '../assets/icons/infoIcon';
import SkillsIcon from '../assets/icons/skillsIcon';
import EduIcon from '../assets/icons/educIcon';
import ExpIcon from '../assets/icons/expIcon';
import PortIcon from '../assets/icons/portIcon';
// import MotivIcon from '../assets/icons/motIcon';
import ContIcon from '../assets/icons/contIcon';

const MainMenu = (props) => {
    return(
            <div className={cssClasses.menu_wrapper} id="menu">
                <div className={cssClasses.menu_wrapper_button}>    
                    <NavLink to="/" exact activeClassName={cssClasses.active}>
                        <InfoIcon width={50} className={cssClasses.menu_wrapper_button__icon} />
                    </NavLink>
                </div>
                <div className={cssClasses.menu_wrapper_button}>
                    <NavLink to="/skills" activeClassName={cssClasses.active}>
                        <SkillsIcon width={50}  className={cssClasses.menu_wrapper_button__icon}/>
                    </NavLink>
                </div>
                <div className={cssClasses.menu_wrapper_button}>
                    <NavLink to="/education" activeClassName={cssClasses.active}>
                        <EduIcon width={50}  className={cssClasses.menu_wrapper_button__icon}/>
                    </NavLink>
                </div>
                <div className={cssClasses.menu_wrapper_button}>
                    <NavLink to="/experience" activeClassName={cssClasses.active}>
                        <ExpIcon width={50}  className={cssClasses.menu_wrapper_button__icon}/>
                    </NavLink>
                </div>
                <div className={cssClasses.menu_wrapper_button}>
                    <NavLink to="/portfolio" activeClassName={cssClasses.active}>
                        <PortIcon width={50}  className={cssClasses.menu_wrapper_button__icon}/>
                    </NavLink>
                </div>
                {/* <div className={cssClasses.menu_wrapper_button}>
                    <NavLink to="/motivation" activeClassName={cssClasses.active}>
                        <MotivIcon width={50}  className={cssClasses.menu_wrapper_button__icon}/>
                    </NavLink>
                </div> */}
                <div className={cssClasses.menu_wrapper_button}>
                    <NavLink to="/contact" activeClassName={cssClasses.active}>
                        <ContIcon width={50}  className={cssClasses.menu_wrapper_button__icon}/>
                    </NavLink>
                </div>
            </div>
  
    );
}

export default MainMenu;