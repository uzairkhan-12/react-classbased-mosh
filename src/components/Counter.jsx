import React, { Component } from 'react'

class Counter extends Component {
    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? <span>zero</span> : value
    }
    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }
    render() {
        let classes = this.getBadgeClasses()

        return (
            <div className='mt-2'>
                <span style={this.styles} className={classes}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-primary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-"
        classes += (this.props.counter.value === 0 ? 'warning' : 'primary')
        return classes
    }
}
export default Counter