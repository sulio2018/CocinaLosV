import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../images/logo.png";
import "./style.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><img src={Logo} className="logo" height="70" width="75" alt="website logo" /></Link>
                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/foodstand">Food Stand</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catering" id="navbarDropdownMenuLink" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catering</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" id="navbarDropdownMenuLink" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;