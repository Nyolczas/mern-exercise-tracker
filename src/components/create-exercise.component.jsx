import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value});
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value});
    }
    onChangeDuration(e) {
        this.setState({ duration: e.target.value});
    }
    onChangeDate(date) {
        this.setState({ date: date});
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise);

        window.location = '/';
    }

    render() {
        return (
            <main className="container">
                <h1>Create new Exercise</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}>{ 
                                this.state.users.map(user => <option key={user} value={user}> {user} </option>)
                            }
                        </select>
                    </div>
                </form>
            </main>
        )
    }
}