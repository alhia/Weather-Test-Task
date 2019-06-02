import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }
    onChange = (event) => {
        this.setState({input: event.target.value});
    }
    render() {
       const { input } = this.state;
       const { getWeather } = this.props;
        return (
            <form onSubmit={(e) => getWeather(e, input)}>
                <Input 
                size='massive' 
                icon='search' 
                placeholder='Search for city...' 
                value={input}
                onChange={this.onChange}
                />
            </form>
        )
    }
}
