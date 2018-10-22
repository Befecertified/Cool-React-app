import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.changeButtonClasses()}>
          {this.formatCounterValue()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  changeButtonClasses() {
    let classes = "badge m-2 badge-";
    return this.props.counter.value === 0
      ? (classes += "warning")
      : (classes += "primary");
  }

  formatCounterValue() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
