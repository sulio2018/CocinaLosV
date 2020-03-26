import React from 'react';
import Form from '../../components/Form';
import './style.css'

function Contact() {
    return (
        <div className='container'>
            <p className='text-center'>For all inquiries contact Miguel Velasquez at</p>

            <p className='text-center'><a className='phone-contact' href="tel:+3235524263">323.552.4263</a></p>

            <p className='text-center'>For reservations fill out the form - please provide two potential dates for your event, 
            address, phone number, and quantity of people attending.</p>

            <div className='row'>
                <div className='col-md-12'>
                    <Form />
                </div>
            </div>

        </div >
    );
}

export default Contact;