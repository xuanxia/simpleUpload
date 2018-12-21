/**
** 普通图片上传后展示组件
*/
import React, { Component } from 'react';

export default class UploadedImage  extends Component{
    constructor(props){
        super(props);
    }
    render(){

        const {fileList,handles,} = this.props;

        if(!fileList || !fileList.length){
            return;
        }

        const { handleDeleted } = handles;

        return <div style={{display: 'inline-block'}}>{
            fileList.map((item) => <div  key={item.key} style={{
                display: 'inline-block',
                position: 'relative',
                marginRight: 12
            }}>
                <img
                    width={100}
                    height={100}
                    src={`${item.url}`}
                    alt=""
                />
                <a
                    onClick={() => {
                        handleDeleted &&  handleDeleted(item);
                    }}
                    style={{
                        display: 'inline-block',
                        position: 'absolute',
                        fontSize: 12,
                        left: 60,
                        top: 5,
                        zIndex: 10,
                        color: '#fff',
                        background: '#e2e2e2',
                        padding: '2px 5px',
                        cursor: 'pointer',
                    }}>删除</a>
            </div>)
        }</div>;
    };

}
