import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null
        }
    }
    onChange = (event) => {
        this.setState({value: event.target.value});
        console.log(this.state.value)
    }
    render() {
       const { value } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Input 
                size='massive' 
                icon='search' 
                placeholder='Search for city...' 
                value={value}
                onChange={this.onChange}
                />
            </form>
        )
    }
}
