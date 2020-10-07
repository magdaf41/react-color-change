import React, { Component } from 'react';



class ChangeColor extends Component {


    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
        }
    }


    changeColor = (action) => {
        console.log('działa')
        this.setState((prevState)=>{
            return ({
                color: 'blue'
            })

        });
    }

    render() {
        return (

            <div>
                <h2 className={this.state.color}>{this.props.text}</h2>
                <button className='btn' onClick={this.changeColor}>
                    red
                </button>
                <button className='btn' onClick={this.changeColor}>
                    blue
                </button>
                <button className='btn' onClick={this.changeColor}>
                    green
                </button>
            </div>
        );
    }
}

export default ChangeColor