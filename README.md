# simpleUpload
简单的文件上传组件  基于BaseUpload 可以搭建各种丰富的上传组件 可以参考图片上传组件

## 封装图片上传组件
```
import React, {PureComponent} from 'react';
import BaseUpload from './BaseUpload';
import { UploadedImage, UploadButton, DraggableUploadedImage } from '../defaultFunc';

export default class ReactUpload extends PureComponent{

    render(){

        const {
            dealResponse,
            uploadServerHost,
            downloadServerHost,
            draggable,
            getSignatureInfo,
            showImage,
            onChange,
            totalNum,
            showErrorMessage,
            value,
            showShade
        } = this.props;

        return  <BaseUpload
            value={value}
            totalNum={totalNum}
            uploadServerHost={uploadServerHost}
            downloadServerHost={downloadServerHost}
            UploadedImage={draggable ? DraggableUploadedImage : UploadedImage}
            UploadButton={UploadButton}
            dealResponse={dealResponse}
            getSignatureInfo={getSignatureInfo}
            onChange={onChange}
            showImage={showImage}
            showErrorMessage={showErrorMessage}
            showShade={showShade}
        />;
    }
}

```
## 图片上传组件 使用
```
import React, {Component} from 'react';
import { ImageUpload } from '@/index';


const getSignatureInfo =  (option) => {
    const {width,height,} = option;
    const apiServerUrl = 'https://hp.bncry.cn/util/getAliyunSignature';
    const url = `${apiServerUrl}?${[
        `bizName=test`,
        `suffix=jpg`,
        `width=${width}`,
        `height=${height}`,
    ].join('&')}`;

    return new Promise((resolve,reject) => {

        // 这里可以校验图片宽高
        // if(width !== 800){
        //     alert('图片尺寸只能是800px');
        //     reject();
        // }
        //
        fetch(url).then(async (response) => {
            const res = await response.json();
            const formData = res.data;

            resolve({
                key: formData.dirPath,
                policy: formData.policy,
                OSSAccessKeyId: formData.OSSAccessKeyId,
                success_action_status: '200',
                callback: formData.callback,
                signature: formData.signature,
            });
        });
    });
};

const host = 'https://hp-file-lf.oss-cn-hangzhou.aliyuncs.com';

const dealResponse =  (response) => {

    const {key} = response.data;

    return {
        key: key,
        url: `${host}/${key}`,
        thumbnail:`${host}/${key}`,
    };

};


export default  class Demo extends Component{

    render(){
        return <div style={{padding:20}}>

            <ImageUpload
                getSignatureInfo={getSignatureInfo}
                dealResponse={dealResponse}
                uploadServerHost={host}
                downloadServerHost={host}
                draggable={true}
                totalNum={5}
                showImage={(index,list) => {
                    console.log(index, list);
                }}
                onChange={(value) => {
                    console.log(value);
                }}
                showShade={true}
            />
        </div>;
    }
}
```

