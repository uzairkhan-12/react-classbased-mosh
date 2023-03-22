import React, { Component } from 'react'
import Counters from './components/Counters'
import Navbar from './components/Navbar'

export default class App extends Component {
    state = {
        counter : [
        {id:0, value:0,title:"one"},
        {id:1, value:0,title:"two"},
        {id:2, value:0,title:"three"},
        {id:3, value:0,title:"four"},
        {id:4, value:0,title:"five"},
    ]
    }
    handleDelete = (id) => {
        console.log('delete is calling',id)
        const counters = this.state.counter.filter(x => x.id !== id)
        this.setState({counter:counters})
    }
    handleReset = () => {
        console.log('clicked')
        const counter = this.state.counter.map(x => {
            x.value = 0;
            return x;
        })
        console.log(counter)
         this.setState({counter})
    }
    handleIncrement  = (currentCounter) => {
        const counter = [...this.state.counter]
        const index = counter.indexOf(currentCounter)
        counter[index].value++
        this.setState({counter})
    }
  render() {
    return (
      <div>
        <Navbar totalCounters = {this.state.counter.filter(x => x.value > 0).length}/>
        <Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counter={this.state.counter}/>
      </div>
    )
  }
}
