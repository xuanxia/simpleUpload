/**
** 最底层组件
*/

import React, { Component } from 'react';
import {xhrUpload,getInitFileList} from '../utils';

class BaseUpload extends Component{

    static defaultProps = {
        uploadServerHost:'', // 文件上传地址
        downloadServerHost:'', // 文件下载地址
        thumbnail:'', // 预览图后缀
        multiple: false, // 是否批量上传
        UploadedImage: null, // 已上传的图片展示
        UploadButton: null, // 上传按钮
        value:[], // 回显值
        dealResponse:(response) => response, // 处理图片服务器返回值
        getSignatureInfo: () => {},
    };

    constructor(props){
        super(props);
        this.state = {

            fileList: getInitFileList(props),

            fileInput:{
                width:0,
                height:0
            }
        };
    }

    // 删除已上传文件
    handleDeleted = (item) => {
        console.log(item);
        this.setState({fileList: this.state.fileList.filter((it) => item.key !== it.key)});
    };

    // 排序
    handleSort =  (startIndex, endIndex) => {

        const result = Array.from(this.state.fileList);
        const temp = result[startIndex];

        result[startIndex] = result[endIndex];
        result[endIndex] = temp;

        this.setState({fileList: result});

    };

    getHandles = () => {
        return {
            handleDeleted: this.handleDeleted,
            handleSort: this.handleSort,
        };
    };

    handleOnChange = async (files) => {

        const {uploadServerHost, dealResponse, getSignatureInfo} = this.props;

        for(let index = 0; index < files.length; index++){
            const file = files[index];

            const imgBlobUrl = URL.createObjectURL(file);

            const img = document.createElement("img");

            img.onload = async () => {
                const {width, height} = img;
                const option = {
                    file,
                    width,
                    height,
                };
                const signatureInfo = await getSignatureInfo(option);

                const result = await xhrUpload({
                    file,uploadServerHost,signatureInfo
                });

                this.setState({
                    fileList: this.state.fileList.concat([Object.assign({},{
                        name: file.name,
                        size: file.size,
                        type: file.type,
                        webkitRelativePath: file.webkitRelativePath,
                    },dealResponse(result))])
                });

            };
            img.src = imgBlobUrl;
            
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

    getRenderUploaded = () => {
        const {  UploadedImage } = this.props;
        const {fileList} = this.state;

        if(fileList && fileList.length && UploadedImage){
            return <UploadedImage
                fileList={fileList}
                {...this.props}
                handles={this.getHandles()}
            />;
        }
        return null;
    };

    render(){

        const { multiple, UploadButton } = this.props;

        const {fileInput} = this.state;


        return <div className='simple-upload-wrapper'>
            {
                this.getRenderUploaded()
            }
            {
                UploadButton ?
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
                                zIndex:99,
                                cursor:'pointer',
                            }}
                        />
                    </UploadButton> :  <input
                        type="file"
                        accept="image/*"
                        multiple={multiple}
                        onChange={(event) => {
                            this.handleOnChange(event.target.files);
                        }}
                    />
            }
        </div>;
    }

}

export default BaseUpload;