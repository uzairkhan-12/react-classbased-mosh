import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters ? this.props.totalCounters : 0}</span></a>
                    </div>
                </nav>
            </div>
        )
    }
}
