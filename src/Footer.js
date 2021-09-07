import { Link } from '@material-ui/core';
import React from 'react';
import './footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return(
        <div className="footer">

            <div className="footer-top">
                <div className="social-title">Follow us 
                
                    <div className='social-icon'>
                        <Link  to= {{ pathname: 'https://www.facebook.com/' }} target="_blank" >
                            <FacebookIcon/>
                        </Link>
                        <Link to='https://twitter.com/' className='social-icon'>
                            <TwitterIcon/>
                        </Link>
                        <Link to="https://www.instagram.com/" className='social-icon'>
                            <InstagramIcon/>
                        </Link>
                    </div>
                </div>
                

            </div>
            
            <div className="footer-links">
                <div className="footer -linksDiscription">
                   Contact 
                </div>
                <div className="footer -linksDiscription">
                    lorem
                </div>
                <div className="footer -linksDiscription">
                    FAQ
                </div>
                <div className="footer -linksDiscription">
                    About Us
                </div>
            </div>
        </div>
    )
}


export default Footer