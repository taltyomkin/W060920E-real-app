import React, { Component } from 'react';
import PageHeader from './common/PageHeader';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='container'>
                <PageHeader title='Real App Home Page' />
                <div className='row'>
                    <div className='col-12'>

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;