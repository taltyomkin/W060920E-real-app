import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    handleChange = ({ currentTarget }) => {
        const data = { ...this.state.data };
        data[currentTarget.name] = currentTarget.value;
        this.setState({ data })

    }
    renderInput(name, label, type = 'text') {
        const { data } = this.state;
        return <Input
            type={type}
            name={name}
            label={label}
            onChange={this.handleChange}
            value={data[name]}
        />
    }

    renderButton(label) {
        return <button className='btn btn-primary mt-4'>{label}</button>
    }

}

export default Form;