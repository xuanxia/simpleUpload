/**
 * 应用主入口
 **/

// React Libs
import React, {PureComponent} from 'react';
import SimpleUpload from './components/base';
import { renderUploadedFile, UploadButton } from './defaultFunc';

export default class ReactUpload extends PureComponent{

    render(){
        return  <SimpleUpload
            multiple={true}
            imageUploadServerHost='https://hp-file-lf.oss-cn-hangzhou.aliyuncs.com'
            renderUploadedFile={renderUploadedFile}
            UploadButton={UploadButton}
        />;
    }
}

