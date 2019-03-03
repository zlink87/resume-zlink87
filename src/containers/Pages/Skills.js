import React, {Component} from 'react';
import cssClasses from '../../style/main.css';
import ProgressBar2 from '../../assets/progressBar';

class Skills extends Component {
    render() {
        return(
            <div className={[cssClasses.wrapper, cssClasses.row, cssClasses.skills].join(' ')}>

                <div className={cssClasses.column}>
                <h3 className={cssClasses.header}>Main Skill Set</h3>
                    <h4 className={cssClasses.sub_header2}>Front-End Development</h4>
                    <ProgressBar2 barWidth={90} maxWidth={100}/>

                    <h4 className={cssClasses.sub_header2}>UI/UX Design</h4>
                    <ProgressBar2 barWidth={85} maxWidth={100}/>

                    <h4 className={cssClasses.sub_header2}>Print Design</h4>
                    <ProgressBar2 barWidth={76} maxWidth={100}/>

                    <h4 className={cssClasses.sub_header2}>3D Design</h4>
                    <ProgressBar2 barWidth={60} maxWidth={100}/>
                    <br />
                </div>
                <hr />
                <div className={cssClasses.column}>
                    <h3 className={cssClasses.header}>Languages</h3>
                    <p className={cssClasses.p}>Lithuanian // <b>Native</b></p>
                    <p className={cssClasses.p}>English // <b>Fluent</b></p>
                    <p className={cssClasses.p}>Russian // <b>Conversational</b></p>
                    <p className={cssClasses.p}>German // <b>Basics</b></p><br />
                    
                    <h3 className={cssClasses.header}>Computer Languages</h3>
                    <p className={cssClasses.p}>HTML, CSS, JavaScript</p>
                    <h4 className={cssClasses.sub_header}>Frameworks</h4>
                    <p className={cssClasses.p}>React, Vue, Angular</p>
                    <h4 className={cssClasses.sub_header}>Other</h4>
                    <p className={cssClasses.p}>Babbel, WebPack, GIT, Bootstrap, SASS, jQuery, TypeScript</p>
                    <p className={cssClasses.p}></p>
    
                </div>
                <hr />
                <div className={cssClasses.column}>
                <h3 className={cssClasses.header}>Software</h3>
                    <h4 className={cssClasses.sub_header}>Design</h4>
                    <p className={cssClasses.p}>Adobe Photoshop, Illustrator, InDesign, XD</p>
                    <h4 className={cssClasses.sub_header}>Code</h4>
                    <p className={cssClasses.p}>Visual Studio Code</p>
                    <h4 className={cssClasses.sub_header}>3D</h4>
                    <p className={cssClasses.p}>Autodesk Maya</p>
                    <h4 className={cssClasses.sub_header}>Video</h4>
                    <p className={cssClasses.p}>Adobe Premiere, AfterEffects</p>
                    <h4 className={cssClasses.sub_header}>Audio</h4>
                    <p className={cssClasses.p}>Adobe Audition, Steinberg Cubase</p>
                    <h4 className={cssClasses.sub_header}>OS</h4>
                    <p className={cssClasses.p}>Windows, MacOS</p><br />
                </div>
                <hr />
                <div className={cssClasses.column}>
                <h3 className={cssClasses.header}>Soft Skills</h3>
                    <h4 className={cssClasses.sub_header}>Adaptability, Problem Solving</h4>
                    <p className={cssClasses.p}>There is no such word as 'Imposible'.</p>
                    <h4 className={cssClasses.sub_header}>Patience, Trustworthiness</h4>
                    <p className={cssClasses.p}>Loading.....</p>
                    <h4 className={cssClasses.sub_header}>Responsibility, Flexibility, Commitment</h4>
                    <p className={cssClasses.p}>I can adjust to any situation and make the most of it.</p>
                    <h4 className={cssClasses.sub_header}>Decision-making, Planning</h4>
                    <p className={cssClasses.p}>Quick and rational descision making, ogh and love those colorfull sticky notes.</p>
                    <h4 className={cssClasses.sub_header}>Clarity and concision</h4>
                    <p className={cssClasses.p}>As a glass of water.</p>

                </div>

                
                
            </div>
        );  
    } 
}

export default Skills;