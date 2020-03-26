import React from "react";
import { Link } from 'react-router-dom';
import catering1 from '../../images/catering1.jpg';
// import catering2 from '../../images/catering2.jpg';
import catering3 from '../../images/catering3.jpg';
// import catering4 from '../../images/catering4.jpg';
import catering5 from '../../images/catering5.jpg';
import "./style.css"

function Catering() {
    return (

        <div className='container'>
            <div className='row'>

                <div className='col-md-6'>
                    <img id='cateringimg' src={catering1} alt="catering"></img>
                </div>

                <div className='col-md-6' >
                    <p>At Cocina Los V, we do events of all types and sizes, you name it!
                    We can prepare your food for self-service or provide staff in a banquet setting 
                    to take care of your guests.
                    </p>

                    <p>Hit us up via phone or email.</p>

                    <p>Allow at least two weeks before the day of your event.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                    <div className="card">
                        <img src={catering5} className="card-img-top" alt="catering" />
                        <div className="card-body">
                            <h5 className="card-title2">Banquet Menu</h5>
                            <p className="menu">
                                Bacon ipsum dolor amet doner cupim strip steak shankle. Buffalo pork chop meatloaf hamburger sirloin short ribs.
                                Frankfurter pork belly chicken filet mignon, pig flank prosciutto chuck meatball pancetta.
                                </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div className="card-body">
                            <Link to="/contact" className="btn btn-primary">Make Your Reservation Today</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className="card">
                        <img src={catering3} className="card-img-top" alt="catering" />
                        <div className="card-body">
                            <h5 className="card-title2">Self-Serve Menu</h5>
                            <p className="menu">
                                Bacon ipsum dolor amet doner cupim strip steak shankle. Buffalo pork chop meatloaf hamburger sirloin short ribs.
                                Frankfurter pork belly chicken filet mignon, pig flank prosciutto chuck meatball pancetta.
                                </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div className="card-body">
                            <Link to="/contact" className="btn btn-primary">Make Your Reservation Today</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catering;