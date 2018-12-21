/**
 * 应用主入口
 **/

// React Libs
import React, {PureComponent} from 'react';
import BaseUpload from './BaseUpload';
import { UploadedImage, UploadButton, DraggableUploadedImage } from '../defaultFunc';

export default class ReactUpload extends PureComponent{

    render(){

        const {dealResponse, uploadServerHost, downloadServerHost, draggable} = this.props;

        return  <BaseUpload
            multiple={true}
            uploadServerHost={uploadServerHost}
            downloadServerHost={downloadServerHost}
            UploadedImage={draggable ? DraggableUploadedImage : UploadedImage}
            UploadButton={UploadButton}
            dealResponse={dealResponse}
        />;
    }
}

