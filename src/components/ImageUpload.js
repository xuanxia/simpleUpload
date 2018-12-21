/**
 * 应用主入口
 **/

// React Libs
import React, {PureComponent} from 'react';
import BaseUpload from './BaseUpload';
import { renderUploadedFile, UploadButton } from '../defaultFunc';

export default class ReactUpload extends PureComponent{

    render(){

        const {dealResponse, uploadServerHost, downloadServerHost} = this.props;

        return  <BaseUpload
            multiple={true}
            uploadServerHost={uploadServerHost}
            downloadServerHost={downloadServerHost}
            renderUploadedFile={renderUploadedFile}
            UploadButton={UploadButton}
            dealResponse={dealResponse}
        />;
    }
}

