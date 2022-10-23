import React, { Component } from "react";

import '../App.css';

function Square(props){
    return (
       <div>
        <h2>Hallo!</h2>
        <p>Saya components {props.komponen}</p>
        <a href={props.link}>Click here</a>
       </div>
    );
}


export default class CompAndProps extends Component{
    render(){
        const bgColor = {
            backgroundColor: this.props.bgColor
        }
        return (
            <div className="wrapper">
                <div className ="User-info" style={bgColor}>
                    <Square komponen='kiri' link= '/kiri'/>
                    </div>
                    <div className ="User-info" style={bgColor}>
                    <Square komponen='kanan' link= '/kanan'/>
                    </div>
            </div>
        )
    }
}