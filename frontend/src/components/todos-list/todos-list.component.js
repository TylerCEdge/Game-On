import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./list.css";
// import DeleteBtn from '../deleteBtn/deleteBtn';
import Carousel from '../new-release/new-release';
import DeleteBtn from '../deleteBtn/deleteBtn';




const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td className="editBtn">
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
        {/* <td> 
        ✗
        </td>  */}
    </tr>
)

export default class TodosList extends Component {

    constructor (props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Coming Soon</h3>

                <div className="carousel">
                <Carousel />
                </div>
                
                <div id="container-wrapper">
                <div id="container">
                
                </div>

                <table className="table table-striped" style={{ marginTop: 30 }}>
                    <thead>
                        <tr>
                            <th>Game Name</th>
                            <th>Game Type</th>
                            <th>Favoritism</th>
                            <th>Actions</th>
                            {/* <th><DeleteBtn/></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
            </div>  
        )
    }
}