// React Libs
import React, {Component} from 'react';
import { ImageUpload, BaseUpload } from '@/index';

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
                dealResponse={dealResponse}
                uploadServerHost={host}
                downloadServerHost={host}
            />
        </div>;
    }
}