import React from 'react';
import PageHeader from './common/PageHeader';
import Form from './common/Form';
import Joi from 'joi-browser';

class SignUp extends Form {
    constructor(props) {
        super(props);
        this.state = { 
            data: {
                name:'',
                password:'',
                email:'',
            },
            errors: {},
         }
    }
    schema = {
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().required().min(6).label('Password'),
        name: Joi.string().required().min(2).label('Name'),
    }

    doSubmit() {
        console.log('Submited', this.state)
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