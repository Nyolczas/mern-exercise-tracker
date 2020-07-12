import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
        }
        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
    }

    render() {
        return (
            <main className="container">
                <h1>Create new User</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="username">Username: </label>
                        <input type="text" 
                            id="username" 
                            className="form-control" 
                            value={this.state.username} 
                            onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </main>
        )
    }
}