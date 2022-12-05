import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner py-5">
                <div className="container p-5">
                    <div className="m-4">
                        <h1 className="fw-bold">A warm welcome!</h1>
                        <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
                    </div>
                </div>
            </div>
        )
    }
}