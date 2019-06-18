import React, { Component } from 'react';
import axios from 'axios';
import "./list.css";
import Carousel from '../new-release/new-release';

class Img extends Component {
    constructor(props) {
        super(props)
        this.state = { src: "" }
    }

    componentWillMount() {
        this.getImageId();
    }

    getImageId() {
        axios.get(`http://localhost:4000/api/images/${this.props.src}`)
            .then(response => {
                console.log(response)
                this.setState({ src: response.data })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <img
                src={this.state.src}
                alt={this.props.alt}
                style={{
                    height: "150px",
                    width: "200px",
                    borderRadius: "10px"
                }}
            />
        )
    }
}

const Game = props => (
    <tr>
        <td>
            <Img
                src={props.game.cover}
                alt={props.game.name}
            />
        </td>
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
                <Carousel />

                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Cover</th>
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