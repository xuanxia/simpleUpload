// React Libs
import React, {Component} from 'react';
import { ImageUpload } from '@/index';


const getSignatureInfo =  (option) => {
    const {suffix,width,height,} = option;
    const apiServerUrl = 'https://hp.bncry.cn/util/getAliyunSignature';
    const url = `${apiServerUrl}?${[
        `bizName=test`,
        `suffix=${suffix}`,
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
            />
        </div>;
    }
}