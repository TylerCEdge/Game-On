import React, {Component} from 'react';
import axios from 'axios';
import "./create.css";

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeGameName = this.onChangeGameName.bind(this);
        this.onChangeGameType = this.onChangeGameType.bind(this);
        this.onChangeFavoritism = this.onChangeFavoritism.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            game_name: '',
            game_type: '',
            favoritism: ''
        }
    }

    onChangeGameName(e) {
        this.setState({
            game_name: e.target.value
        });
    }

    onChangeGameType(e) {
        this.setState({
            game_type: e.target.value
        });
    }

    onChangeFavoritism(e) {
        this.setState({
            favoritism: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Game Name: ${this.state.game_name}`);
        console.log(`Game Type: ${this.state.game_type}`);
        console.log(`Favoritism: ${this.state.favoritism}`);
        

        const newTodo = {
            game_name: this.state.game_name,
            game_type: this.state.game_type,
            favoritism: this.state.favoritism,
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            game_name: '',
            game_type: '',
            favoritism: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add Favorites</h3>
                <div className="add-wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Game Name </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.game_name}
                                onChange={this.onChangeGameName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Game Type </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.game_type}
                                onChange={this.onChangeGameType}
                                />
                    </div>
                    <div className="form-group">
                        <label>Favoritism</label>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.favoritism==='Low'}
                                    onChange={this.onChangeFavoritism}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.favoritism==='Medium'}
                                    onChange={this.onChangeFavoritism}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.favoritism==='High'}
                                    onChange={this.onChangeFavoritism}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Game" className="btn btn-secondary" />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}