import React, { Component } from 'react';


export default class UploadButton extends  Component{

    componentDidMount(){
        const { onResize } = this.props;

        onResize(this.refs.buttonWrapper);
    }
    render(){
        return <div ref='buttonWrapper' style={{
            width:100,
            height:100,
            position:'relative',
            border: '1px solid #dbdbdb',
            fontSize: 70,
            textAlign: 'center',
            display:'inline-block',
            verticalAlign:'top',
            color:'rgb(128,134,139)'
        }}>
            <span style={{cursor:'pointer'}}>+</span>

            {
                this.props.children
            }
        </div>;
    }
}