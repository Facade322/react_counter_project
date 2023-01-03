import React, { Component } from 'react'

//destructuring
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav> 
    );
};


/* //stateless Functional component
const NavBar = props => {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                        {props.totalCounters}
                    </span>
                </a>
            </nav> 
        );
}; */

//class component
/* class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                </span>
            </a>
        </nav> 
    );
  }
}  */

export default NavBar;