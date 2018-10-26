import React, { Component } from "react";

class Counter extends Component {
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

  disableButtonClass() {
    let classes = "btn btn-secondary btn-sm m-2";
    if (this.props.counter.value === 0) classes += " disabled";
    return classes;
  }

  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.changeButtonClasses()}>
            {this.formatCounterValue()}
          </span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
          <button
            className={this.disableButtonClass()}
            onClick={() => onDecrement(counter)}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
