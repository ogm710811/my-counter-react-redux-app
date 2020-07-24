import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions/index";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter(5)}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.result.map((r) => (
            <li key={r.id} onClick={() => this.props.onDeleteResult(r.id)}>
              {r.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counterReducer.counter,
    result: state.resultReducer.storeResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.incCounter()),
    onDecrementCounter: () => dispatch(actionCreators.decCounter()),
    onAddCounter: (value) => dispatch(actionCreators.addCounter(value)),
    onSubtractCounter: (value) =>
      dispatch(actionCreators.subtractCounter(value)),
    onStoreResult: (counterResult) =>
      dispatch(actionCreators.storeResult(counterResult)),
    onDeleteResult: (id) => {
      dispatch(actionCreators.deleteResult(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
