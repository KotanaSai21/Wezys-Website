import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faFacebook, faInstagram, faLinkedin, faMailchimp, faYoutube,  } from '@fortawesome/free-brands-svg-icons';
import { PrimaryButton } from '@fluentui/react';
function Footer() {
    return(
        <div className="footer-container">
            <div className='news-letter'>
                <span>Subcirbe to our News letter</span>
                <div className='subscribe'>
                    <label  htmlFor="name">Name</label>
                    <input type="text" id = "name" name='name' placeholder='Name'/>
                    <label htmlFor="email">Email</label>
                    <input type="text" id = "email" name='email' placeholder='Email'/>
                    <PrimaryButton className='subscribe-btn'>Subscribe</PrimaryButton>
                </div>
            </div>
            <div className='resources'>
                <ul>
                    <li>Resources</li>
                    <li><a target="_blank" rel="noreferrer noopener" className="f-link" href="https://powerbi.microsoft.com/en-us/guided-learning/">Learning</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" className="f-link" href="https://powerbi.microsoft.com/en-us/guided-learning/">Documenation</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" className="f-link" href="https://powerbi.microsoft.com/en-us/guided-learning/">FAQs</a></li>
                </ul>
                <ul>
                    <li>Legal</li>
                    <li><a target="_blank" rel="noreferrer noopener" className="f-link" href="https://powerbi.microsoft.com/en-us/guided-learning/">Legal Notice</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" className="f-link" href="https://powerbi.microsoft.com/en-us/guided-learning/">Privacy Policy</a></li>
                    <li><a target="_blank" rel="noreferrer noopener" className="f-link" href="https://powerbi.microsoft.com/en-us/guided-learning/">Cookies Policy</a></li>
                </ul>
            </div>
            <div className='follow'>
                <span>Follow us</span>
                <ul className='social-icons'>
                    <li className='icon'><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a></li>
                    <li className='icon'><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a></li>
                    <li className='icon'><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a></li>
                    <li className='icon'><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a></li>
                    <li className='icon'><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a></li>
                </ul>
                <ul className='contact-us'>
                    <li>Contact us</li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMailchimp} size="2x" /> wenzy@gmail.com
                </a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;