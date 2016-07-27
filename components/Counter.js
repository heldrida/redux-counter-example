import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  onIncrement() {
	this.props.dispatch({ type: 'INCREMENT' });
  }

  onDecrement() {
	this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    const { counter, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={this.onIncrement.bind(this)}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement.bind(this)}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  store: PropTypes.func.isRequired
}

// export default Counter

function mapStateToProps(state) {
	return {
		counter: state
	}
}

export default connect(mapStateToProps)(Counter);
