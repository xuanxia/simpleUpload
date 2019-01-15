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
        totalNum: 1, // 大于1 支持批量上传
        UploadedImage: null, // 已上传的图片展示
        UploadButton: null, // 上传按钮
        value:[], // 回显值
        dealResponse:(response) => response, // 处理图片服务器返回值
        getSignatureInfo: () => {},
        onChange:() => {}, // 上层组件获取值
        showImage: () => {}, // 查看图片
        showShade: false, // 是否有参考线
        showErrorMessage:(message) => {
            console.warn(message);
        }
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
        this.setState({fileList: this.state.fileList.filter((it) => item.key !== it.key)},() => {
            this.props.onChange(this.state.fileList.map((item) => item.key));
        });

    };

    // 排序
    handleSort =  (startIndex, endIndex) => {

        const result = Array.from(this.state.fileList);
        const temp = result[startIndex];

        result[startIndex] = result[endIndex];
        result[endIndex] = temp;

        this.setState({fileList: result},() => {
            this.props.onChange(this.state.fileList.map((item) => item.key));
        });

    };

    // 查看图片
    handleShowImage = (index) => {
        const {showImage} = this.props;

        showImage && showImage(index,this.state.fileList.map((item) => item.url));
    };

    getHandles = () => {
        return {
            handleDeleted: this.handleDeleted,
            handleSort: this.handleSort,
            handleShowImage: this.handleShowImage,
        };
    };

    handleOnChange = async (files) => {

        const {
            uploadServerHost,
            dealResponse,
            getSignatureInfo,
            onChange,
            totalNum,
            showErrorMessage
        } = this.props;

        const {fileList} = this.state;

        if(files.length > (totalNum - fileList.length)){
            showErrorMessage && showErrorMessage(`上传总数量超过限制了, 请重新选择`);
            return;
        }
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
                },() => {
                    onChange && onChange(this.state.fileList.map((item) => item.key));
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

        const { totalNum, UploadButton } = this.props;

        const {fileInput, fileList} = this.state;


        return <div className='simple-upload-wrapper'>
            {
                this.getRenderUploaded()
            }
            {
                fileList.length < totalNum ?  UploadButton ?
                    <UploadButton onResize={this.onResize}>
                        <input
                            type="file"
                            accept="image/*"
                            multiple={ (totalNum - fileList.length)  > 1}
                            onChange={(event) => {
                                this.handleOnChange(event.target.files);
                                // 解决input file onchang 事件触发一次后失效问题
                                event.target.value = '';
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
                        multiple={(totalNum - fileList.length)  > 1}
                        onChange={(event) => {
                            this.handleOnChange(event.target.files);
                            // 解决input file onchang 事件触发一次后失效问题
                            event.target.value = '';
                        }}
                    /> : null
            }
        </div>;
    }
}

export default BaseUpload;