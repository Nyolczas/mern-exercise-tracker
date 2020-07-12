import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = { exercises: [] };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <main className="container">
                ExerciseList
            </main>
        )
    }
}