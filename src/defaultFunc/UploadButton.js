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
            border: '1px solid'
        }}>
            上传文件
            {
                this.props.children
            }
        </div>;
    }
}