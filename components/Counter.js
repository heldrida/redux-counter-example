import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { counterIncrement, counterDecrement } from '../actions'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.counterIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.counterIncrement, 1000)
  }

  render() {

    return (
      <p>
        Clicked: {this.props.counter} times
        {' '}
        <button onClick={this.props.counterIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.props.counterDecrement}>
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

// export default Counter

function mapStateToProps(state) {
	return {
		counter: state.counter
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		counterIncrement: counterIncrement,
		counterDecrement: counterDecrement
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Counter);
