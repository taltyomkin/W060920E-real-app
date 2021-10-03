import React from 'react';
import PageHeader from './common/PageHeader';
import Form from './common/Form';

class SignUp extends Form {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                name:'',
                password:'',
                email:'',
            }
         }

    }

    render() { 
        return ( 
            <div className='container'>
                <PageHeader title={'Real App SignUp page'} />
            <div className='row'>
                <div className='col-12'>
                    <form onSubmit={this.handleSubmit} autoComplete='off'>
                        {this.renderInput('email', 'Email', 'email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderInput('name', 'Name')}
                        {this.renderButton('SignUp')}
                    </form>
                </div>
            </div>
            </div>

         );
    }
}
 
export default SignUp;