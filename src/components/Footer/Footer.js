import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer py-4">
            <div className="footer-container">
            <div>
                <h3>Contact Us</h3>
                <p><b>Email:</b> lightshot@gmail.com</p>
                <p><b>Phone:</b> +880000445</p>
                <p><b>Address:</b> Nasirabad,Chittagong</p>
            </div>
            <div>
                <h3>Follow Us</h3>
                <div className="follow-img mt-4">
                     <img src="https://www.freepnglogos.com/uploads/facebook-logo-png-6.png" alt="" />
                    <img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png" alt="" />
                    <img src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" alt="" />
                    <img src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" alt="" />
                </div>

            </div>
            </div>
            <small>
                    <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
                     2021 LightShot. All rights reserved.
            </small>
        </div>
    );
};

export default Footer;