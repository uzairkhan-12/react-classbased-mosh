import React, { Component } from 'react'
import Counter from './Counter'

export default class Counters extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.onReset} className="button btn-warning btn-lg m-2">Reset</button>
                {this.props.counter.map(counter =>
                    <Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter}>
                    </Counter>)}
            </div>
        )
    }
}
