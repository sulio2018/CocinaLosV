import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./style.css";

function Footer() {

    return (
        <div>
            <section className="main-footer">

                <div className="container">
                    <div className='row'>
                        <div className='col-md-6 text-center'>
                            <h5>Cocina Los V</h5>
                            <ul className='list-unstyled'>
                                <li><a className='phone' href="tel:+3235524263">323.552.4263</a></li>
                                <li>mvelasquez@cocinalosv.com</li>
                            </ul>
                        </div>


                        <div className="col-md-6 text-center center-block">
                            <SocialIcon className="icon" id="ig" bgColor="#B233D2" target="_blank" url="https://www.instagram.com/cocina.los.v/" />
                            <SocialIcon className="icon" id="fb" target="_blank" url="https://www.facebook.com/Cocina.Los.Velasquez/" />
                            <SocialIcon network="twitter" className="icon" target="_blank" />
                            <SocialIcon className="icon" target="_blank" url="mailto:jcmartinez1925@gmail.com" />
                        </div>
                    </div>

                    <hr />

                    <div className='row'>

                        <h6 className='col-sm'>
                            &copy; {new Date().getFullYear()} JCM Technologies | All rights reserved
                        </h6>

                    </div>
                </div>

            </section>
        </div>
    );

}

export default Footer;