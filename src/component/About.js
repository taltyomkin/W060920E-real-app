import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-12 mt-4'>
                        <h1> Real App About Page</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <p> This is my About Page</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;