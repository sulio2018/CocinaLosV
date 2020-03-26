import React from "react";
import { Link } from 'react-router-dom';
import Map from "../../components/Map";
import foodstand1 from "../../images/foodstand1.jpg";
import "./style.css"

function FoodStand() {
    return (

        <div>

            <h1>We are located in the corner of S Gage Ave and E Olympic Blvd</h1>

            <h2>We are open Saturdays and Sundays 9am - 1pm</h2>

            <h3>Check out our menu below</h3>

            <br />

            <div className='container'>

                <Map />

                <div className='row'>
                    <div className='col-md-6'>
                        <img id='foodstandimg' src={foodstand1} className='center' alt="foodstand"></img>
                    </div>

                    <div className='col-md-6'>
                        <div className="card">
                            <div className="card-header">
                                Menu
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Consomé</h5>
                                <p className="card-text">Broth with Birria cup/24oz (most popular)
                                ...............................................$5/$10</p>

                                <h5 className="card-title">Birria Ramen</h5>
                                <p className="card-text">Broth with Birria and Ramen cup/24oz......................$10/$25</p>

                                <h5 className="card-title">Mulitas</h5>
                                <p className="card-text">Birria inside two tortillas with melted cheese.......................$4</p>

                                <h5 className="card-title">Dorados</h5>
                                <p className="card-text">Crispy tacos with birria.......................................................$1.5ea</p>

                                <h5 className="card-title">Quesabirria</h5>
                                <p className="card-text">Cheese and Birria wrapped in corn tortilla............................$4</p>

                                <h5 className="card-title">Vampiros</h5>
                                <p className="card-text">Birria on a toasty tortilla with an egg on top..........................$5</p>
                                
                                <Link to="/catering" className="btn btn-primary">Catering Menu</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default FoodStand;