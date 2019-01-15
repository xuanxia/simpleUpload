/**
** 普通图片上传后展示组件
*/
import React, { Component } from 'react';

export default class UploadedImage  extends Component{
    static defaultProps = {
        fileList: []
    };
    constructor(props){
        super(props);
    }
    render(){

        const {fileList,handles,} = this.props;

        const { handleDeleted, handleShowImage } = handles;

        return <div style={{display: 'inline-block'}}>
            {
                fileList.map((item,index) => <div  key={item.key} style={{
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
                        className='image-delete'
                        style={{
                            display: 'inline-block',
                            position: 'absolute',
                            fontSize: 12,
                            left: 60,
                            top: 5,
                            zIndex: 10,
                            color: '#fff',
                            background: 'rgb(82, 79, 79, 0.5)',
                            padding: '2px 5px',
                            cursor: 'pointer',
                        }}>删除</a>

                    <a
                        onClick={() => {
                            handleShowImage &&  handleShowImage(index);
                        }}
                        className='image-show'
                        style={{
                            display: 'inline-block',
                            position: 'absolute',
                            fontSize: 12,
                            left: 0,
                            top: 0,
                            zIndex: 9,
                            color: '#fff',
                            padding: '43px 38px',
                            cursor: 'pointer',
                        }}
                    >
                        查看
                    </a>

                </div>)
            }</div>;
    }

}

