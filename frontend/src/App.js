import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo/create-todo.component";
import EditTodo from "./components/edit-todo/edit-todo.component";
import TodosList from "./components/todos-list/todos-list.component";
import logo from "./logo.png";
import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand"
              href="https://codingthesmartway.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} width="30" height="30" alt="Your A Wizard" />
            </a>
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link one">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link two">
                    Create Todos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
