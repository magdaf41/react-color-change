import React, { Component } from 'react';
import ButtonChangeText from './ButtonChangeText';

class ChangeText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
        }
    }

    changeText = (action) => {
        console.log('działa')

        this.setState((prevState) => {
            return ({
                text: 'nowy text',
            })

        });
    }

    render() {
        return (

            <div>
                <h2>{this.props.text}</h2>
                <ButtonChangeText changeText={this.changeText}/>
            </div>
        );
    }
}

export default ChangeText;