import React, { Component } from 'react';
import axios from 'axios';
import "./list.css";
import Image from "./Image.js"
const Game = props => (
    <tr>
        <td>{props.game.name}</td>
        <td>{props.game.summary}</td>
        <td>{props.game.popularity}</td>
    </tr>
)

export default class GamesList extends Component {

    constructor(props) {
        super(props);
        this.state = { games: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/popular/')
            .then(response => {
                this.setState({ games: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    gameList() {
        return this.state.games.map(function (game, i) {
            return <Game game={game} key={i} />;
        })
    }

    render() {
        return (
            <>
                <Image />

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Summary</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.gameList()}
                    </tbody>
                </table>
            </>
        )
    }
}