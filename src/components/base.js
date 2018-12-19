/**
** 最底层组件
*/

import React, { Component } from 'react';
import {httpFetch,xhrUpload} from '../utils';


class SimpleUpload extends Component{

    static defaultProps = {
        imageUploadServerHost:'', // 服务器上传地址
        multiple: false, // 是否批量上传
        renderUploadedFile: () => {}, // 渲染已上传的图片方法
        UploadButton: <div></div>, // 上传按钮
    };

    constructor(props){
        super(props);
        this.state = {
            fileList: [],
            fileInput:{
                width:0,
                height:0
            }
        };
    }

    // 删除已上传文件
    handleDeleted = (item) => {
        console.log(item);
        this.setState({fileList:[]});
    };

    getHandles = () => {
        return {
            handleDeleted: this.handleDeleted,
        };
    };

    handleOnChange = async (files) => {

        const {imageUploadServerHost} = this.props;

        for(let index = 0; index < files.length; index++){
            const file = files[index];
            const signatureInfo = await httpFetch('jpg',400,400);
            const result = await xhrUpload({
                file,imageUploadServerHost,signatureInfo
            });

            this.setState({
                fileList: this.state.fileList.concat([Object.assign({},file,result)])
            });

        }

    };

    onResize = (dom) => {
        // TODO 校验
        this.setState({
            fileInput:{
                width: dom.offsetWidth,
                height: dom.offsetHeight,
            }
        });
    };

    render(){


        const { multiple, renderUploadedFile, UploadButton } = this.props;

        const {fileList,fileInput} = this.state;

        return <div className='simple-upload-wrapper'>
            {
                renderUploadedFile(fileList, this.props,this.getHandles())
            }

            <UploadButton onResize={this.onResize}>
                <input
                    type="file"
                    accept="image/*"
                    multiple={multiple}
                    onChange={(event) => {
                        console.log(event);
                        console.log(event.target);
                        console.log(event.target.files);
                        this.handleOnChange(event.target.files);
                    }}
                    style={{
                        width:fileInput.width,
                        height:fileInput.height,
                        opacity:0,
                        position:'absolute',
                        top:0,
                        left:0,
                        zIndex:99
                    }}
                />
            </UploadButton>

        </div>;
    }

}

export default SimpleUpload;