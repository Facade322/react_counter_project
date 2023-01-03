import React, { Component } from 'react';


class Counter extends Component {
  /* componentDidUpdate(prevprops, prevState) {
    console.log("prevProps", prevProps);
    console.log("PrevState", prevState);
    if (prevprops.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  } */
  /* state = {
    value: this.props.counter.value,
  }; */

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);

  // }

  //arrow function can do the same thing as the constructor and its simple
  /* handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }; */

  render() {
    console.log("Counter - Rendered");
    
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
          </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badges m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

}

export default Counter;