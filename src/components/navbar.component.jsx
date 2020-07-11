import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container justify-content-start">
                    <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>    
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Create Exercise</Link>
                        </li>    
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>    
                    </ul>
                </div>
            </nav>
        )
    }
}