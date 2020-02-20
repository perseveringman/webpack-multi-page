import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'src/common/css/reset.css';
import routes from 'configs/router.config';

class Home extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>development 404 page</h1>
        <h2>Your Routes:</h2>
        <ul>
          {routes.map(route => {
            return (
            <li> <a href={`${window.location.origin}${route.path}`}>{route.path}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
