/**
 ** 支持拖拽排序图片展示组件
 */
import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? '#fff' : '#fff',
    display: 'inline-block',
    padding: 0,
});

const getItemStyle = (isDragging, draggableStyle) => ({
    display: 'inline-block',
    marginRight: 8,
    position:'relative',
    padding: 0,
    userSelect: 'none',
    background: isDragging ?  '#fff' : '#fff',
    ...draggableStyle,
});

export default class UploadedImage  extends Component{
    constructor(props){
        super(props);
    }


    onDragEnd = (result) => {
        if(result.source && result.destination){
            const { handles } = this.props;

            handles.handleSort(result.source.index,result.destination.index);
        }
    };

    render(){

        const {fileList,handles,} = this.props;

        if(!fileList || !fileList.length){
            return;
        }

        const { handleDeleted, handleShowImage } = handles;

        return <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {
                    (provided, snapshot) => 
                        <div
                            style={getListStyle(snapshot.isDraggingOver)}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >{
                                fileList.map((item,index) => <Draggable
                                    key={item.key}
                                    draggableId={item.key}
                                    index={index}
                                    style={{
                                        display: 'inline-block',
                                        position: 'relative',
                                        marginRight: 12
                                    }}>

                                    {
                                        (provided, snapshot) => 
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                <img
                                                    width={100}
                                                    height={100}
                                                    src={`${item.url}`}
                                                    alt=""
                                                />
                                                <a
                                                    onClick={() => {
                                                        handleDeleted && handleDeleted(item);
                                                    }}
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
                                                        padding: '44px 38px',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    查看
                                                </a>
                                            </div>
                                        
                                    }
                                </Draggable>)
                            }</div>
                        
                }
            </Droppable>
        </DragDropContext>;

    }

}

