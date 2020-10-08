import React, { Component } from 'react';
import Buttons from './Buttons'

class ChangeColor extends Component {


    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
        }
    }


    changeColor = (action) => {
        console.log('działa')
        let btnValue = action.target.innerText;

        this.setState((prevState) => {
            return ({
                color: btnValue,
            })

        });
    }

    render() {
        return (

            <div>
                <h2 className={this.state.color}>{this.props.text}</h2>
                <Buttons buttonChangeColor = {this.changeColor}/>
            </div>
        );
    }
}

export default ChangeColor