import React from 'react';
import cssClasses from '../../style/main.css';

import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// ICONS
import PhoneIcon from '../../assets/icons/phoneIcon';
import EmailIcon from '../../assets/icons/emailIcon';
import FbIcon from '../../assets/icons/fbIcon';
import LinkedInIcon from '../../assets/icons/linkedinIcon';

const tooltipPhone = (
    <Tooltip className={cssClasses.contact__tooltip} id="tooltip">
      <strong>Lets talk</strong> on the phone.
    </Tooltip>
);

const tooltipEmail = (
<Tooltip className={cssClasses.contact__tooltip} id="tooltip">
    <strong>Write me</strong> an email.
</Tooltip>
);

const tooltipFB = (
<Tooltip className={cssClasses.contact__tooltip} id="tooltip">
    <strong>Check my</strong> Github repositories.
</Tooltip>
);

const tooltipLin = (
<Tooltip className={cssClasses.contact__tooltip} id="tooltip">
    <strong>Check my</strong> Linkedin profile.
</Tooltip>
);

const Contact = () => {
    return(
        <div className={[cssClasses.wrapper, cssClasses.row].join(' ')}>
            <div className={[cssClasses.contact].join(' ')}>
            <h2>Hey! Thank you for coming so far.</h2>
    
                <div className={cssClasses.contact__icon_wrapper}>
                    <OverlayTrigger placement="bottom" overlay={tooltipPhone}> 
                        <a href="tel:+37060588602" ><PhoneIcon width={80} className={cssClasses.contact__icon}/></a>
                    </OverlayTrigger>
                </div>

                <div className={cssClasses.contact__icon_wrapper}>
                    <OverlayTrigger placement="bottom" overlay={tooltipEmail}> 
                        <a href="mailto:laurynas.zilinskas@gmail.com"><EmailIcon width={80} className={cssClasses.contact__icon}/></a>
                    </OverlayTrigger>
                </div>

                <div className={cssClasses.contact__icon_wrapper}>
                    <OverlayTrigger placement="bottom" overlay={tooltipFB}> 
                        <a href="https://github.com/zlink87" target="_blank" rel="noopener noreferrer"><FbIcon width={80} className={cssClasses.contact__icon}/></a>
                    </OverlayTrigger>
                </div>

                <div className={cssClasses.contact__icon_wrapper}>
                    <OverlayTrigger placement="bottom" overlay={tooltipLin}> 
                        <a href="https://www.linkedin.com/in/zlink87/" target="_blank" rel="noopener noreferrer"><LinkedInIcon width={80} className={cssClasses.contact__icon}/></a>
                    </OverlayTrigger>
                </div>
            </div>
        </div>
    );
}

export default Contact;