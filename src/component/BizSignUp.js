import React from 'react';
import PageHeader from './common/PageHeader';
import Form from './common/Form';
import Joi from 'joi-browser';
import http from '../services/httpService';
import {apiUrl} from "../config.json";
import { toast } from 'react-toastify';
import userService from '../services/userService';
import { Redirect } from 'react-router';

class BizSignUp extends Form {
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

    async doSubmit() {
        const {history} = this.props;
        const data = {...this.state.data, biz:true};
        console.log('Submited', data);
        try{
            await http.post(`${apiUrl}/users`, data);
            await userService.login(data.email, data.password);
            console.log('user created');
            window.location = "/create-card"
        } catch(error){
            console.log(error.response.data);
            this.setState({
                errors:{
                    ...this.state.errors,
                    email:"this email is allredy taken",
                }
            })
        }

    }

        

    render() { 
        if(userService.getCurrentUser()){
            return <Redirect to="/" />
        }
        return ( 
            <div className='container'>
                <PageHeader title={'Business registration form'} />
            <div className='row'>
                <div className='col-12'>
                    <form onSubmit={this.handleSubmit} autoComplete='off'>
                        {this.renderInput('email', 'Email', 'email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderInput('name', 'Name')}
                        {this.renderButton('next')}
                    </form>
                </div>
            </div>
            </div>

         );
    }
}
 
export default BizSignUp;